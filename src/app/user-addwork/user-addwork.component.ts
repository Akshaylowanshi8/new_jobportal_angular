import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MyJobService } from '../my-job.service';
import Swal from 'sweetalert2';
import { publishFacade } from '@angular/compiler';

@Component({
  selector: 'app-user-addwork',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule ,RouterLink],
  templateUrl: './user-addwork.component.html',
  styleUrl: './user-addwork.component.css'
})
export class UserAddworkComponent {
  jobForm!: FormGroup;

  constructor(private fb: FormBuilder  ,
    private activerouter: ActivatedRoute,
    public _service:MyJobService,
    public _rout:Router
  ) {}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required],
      id:Math.floor(1000 + Math.random() * 9000)
    });
  }

  onSubmit(): void {

    this.activerouter.paramMap.subscribe(res => {
      const pid = res.get('id');
      console.log(pid);
      if (pid) {
    if (this.jobForm.valid) {
     this._service.UserAddwork((this.jobForm.value),pid).subscribe(response => {
      console.log(response);
      Swal.fire('data save    ','sucsess')
  this._rout.navigateByUrl('userprofile')
            })

      console.log(this.jobForm.value);
    }
  }
})


}

}
