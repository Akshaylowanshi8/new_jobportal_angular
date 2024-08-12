import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyJobService } from '../my-job.service';
import { Datas } from '../datas';
import {FormBuilder,FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ,RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'] // Fixed from styleUrl to styleUrls
})
export class UserProfileComponent implements OnInit {
  profileForm!: FormGroup;
  private fb!: FormBuilder;
  profile: Datas | null = null;

  constructor(public _service: MyJobService) { };
  ngOnInit(): void {
    const id = localStorage.getItem('userid');
    if (id) {
      this._service.userprofile(id).subscribe((res:Datas[]) => {
        console.log(res);
        // this.profile = res;
        if (res && res.length > 0) {
          this.profile = res[0]; 
        console.log(this.profile);
      }
      });
    } else {
      console.error('User ID not found in local storage');
    }
  
  } 
}



  

