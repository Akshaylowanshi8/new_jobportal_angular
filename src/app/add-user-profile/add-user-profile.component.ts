import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyJobService } from '../my-job.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user-profile',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
templateUrl: './add-user-profile.component.html',
  styleUrl: './add-user-profile.component.css'
})
export class AddUserProfileComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder,
   private userService: MyJobService,
   public _routes:Router
  
) {}
  ngOnInit(): void {
   let userid = localStorage.getItem('userid')  
    this.userForm = this.fb.group({
      userId: [userid, Validators.required],
      education: this.fb.array([this.createEducationGroup()]),
      workExperience: this.fb.array([this.createWorkExperienceGroup()]),
      skills: this.fb.array([this.createSkillGroup()]),
      profilePicture: ['']
    });
  }

  get educationControls() {
    return (this.userForm.get('education') as FormArray).controls;
  }

  get workExperienceControls() {
    return (this.userForm.get('workExperience') as FormArray).controls;
  }

  get skillsControls() {
    return (this.userForm.get('skills') as FormArray).controls;
  }

  createEducationGroup(): FormGroup {
    return this.fb.group({
      id:Math.floor(1000 + Math.random() * 9000),
      degree: ['', Validators.required],
      university: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  createWorkExperienceGroup(): FormGroup {
    return this.fb.group({
      id:Math.floor(1000 + Math.random() * 9000),
      title: ['', Validators.required],
      company: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['']
    });
  }

  createSkillGroup(): FormGroup {
    return this.fb.group({
      id:Math.floor(1000 + Math.random() * 9000),
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (this.userForm.valid) {
      this.userService.addUserProfile(this.userForm.value).subscribe(response => {
        Swal.fire('User profile saved!',   'success' )
        this.userForm.reset();
        this._routes.navigateByUrl('peofile')
      });
    }
  }
}




