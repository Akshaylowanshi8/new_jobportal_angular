import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyJobService } from '../my-job.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  jobSeekerForm!: FormGroup;
  recruiterForm!: FormGroup;
  currentForm: string = 'jobSeeker';
  constructor(
    public _jobservice: MyJobService,
    private routes: Router
  ) {}

  ngOnInit() {
      this.jobSeekerForm = new FormGroup({
      role: new FormControl('jobseeker', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.recruiterForm = new FormGroup({
      role: new FormControl('recruiter', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  showForm(formType: string) {
    this.currentForm = formType;
  }

  onSubmitJobSeeker() {
    if (this.jobSeekerForm.valid) {
      this._jobservice.Registruser(this.jobSeekerForm.value).subscribe((res: any) => {
        Swal.fire('Thank you...', 'Account successfully created', 'success');
        this.routes.navigateByUrl('login');
      });
      console.log(this.jobSeekerForm.value);
    }
  }

  onSubmitRecruiter() {
    if (this.recruiterForm.valid) {
      this._jobservice.RegistrRec(this.recruiterForm.value).subscribe((res: any) => {
        Swal.fire('Thank you...', 'Account successfully created', 'success');
        this.routes.navigateByUrl('login');
      });
      console.log(this.recruiterForm.value);
    }
  }
}
