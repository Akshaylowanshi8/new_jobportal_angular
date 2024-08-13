import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MyJobService } from '../my-job.service';
import { Subscriber } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-add-education',
  standalone: true,
  imports: [CommonModule,RouterLink ,ReactiveFormsModule],
  templateUrl: './user-add-education.component.html',
  styleUrl: './user-add-education.component.css'
})
export class UserAddEducationComponent {
  educationForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private activerouter: ActivatedRoute,
    public _service:MyJobService,
     public _rou: Router
  ){}
  ngOnInit(): void {
    this.educationForm = this.fb.group({
      degree: ['', Validators.required],
      university: ['', Validators.required],
      year: ['', Validators.required],
      description: ['', Validators.required],
      id:Math.floor(1000 + Math.random() * 9000)
    });
  }

  

  onSubmit(): void {


    this.activerouter.paramMap.subscribe(res => {
      const pid = res.get('id');
      console.log(pid);
      if (pid) {
        if (this.educationForm.valid) {
          this._service.AddUsereducation((this.educationForm.value),pid).subscribe(response => {
    swal.fire('data save    ','sucsess')
    this._rou.navigateByUrl('userprofile')
      
     
          })
        
         }
  
      }
    });
   
  }

}
