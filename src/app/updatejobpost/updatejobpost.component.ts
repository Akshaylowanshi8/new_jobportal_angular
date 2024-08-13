import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MyJobService } from '../my-job.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Datas } from '../datas';

@Component({
  selector: 'app-updatejobpost',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './updatejobpost.component.html',
  styleUrls: ['./updatejobpost.component.css']
})
export class UpdatejobpostComponent implements OnInit {
  postnewjob!: FormGroup;
  id: string = "";

  constructor(
    private _service: MyJobService,
    private activerouter: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.postnewjob = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      company: new FormControl('', [Validators.required, Validators.minLength(3)]),
      location: new FormControl('', [Validators.required, Validators.minLength(3)]),
      postedDate: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      requirements: new FormControl('', [Validators.required, Validators.minLength(3)]),
      type: new FormControl('', [Validators.required, Validators.minLength(3)]),
      industry: new FormControl('', [Validators.required, Validators.minLength(3)]),
      recruiterId: new FormControl('', Validators.required)
    });

    this.activerouter.paramMap.subscribe(res => {
      const pid = res.get('id');
      if (pid) {
        this._service.GetEditjobPost(pid).subscribe((data:any) => { 
          this.id=data[0].id
          this.initializeForm(data[0]);
          console.log(data[0])
        });
      }
    });
  }

  initializeForm(data:Datas) {
    const id = localStorage.getItem('userid') || '';

    this.postnewjob.patchValue({
      title: data.title || '',
      company: data.company || '',
      location: data.location || '',
      postedDate: data.postedDate || '',
      description: data.description || '',
      requirements: data.requirements || '',
      type: data.type || '',
      industry: data.industry || '',
      recruiterId: id
    });
  }

  onSubmitpost() {
    if (this.postnewjob.valid) {
      this._service.postjobupdate(this.postnewjob.value,this.id).subscribe(response => {
        Swal.fire('Post updated and saved!', '', 'success');
        this.postnewjob.reset();
        this._router.navigateByUrl('desh');
      });
    }
  }
}
