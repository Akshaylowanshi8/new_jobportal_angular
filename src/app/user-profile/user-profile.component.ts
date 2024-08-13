import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyJobService } from '../my-job.service';
import { Datas } from '../datas';
import {FormBuilder,FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

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
useId=localStorage.getItem('userid');
  constructor(public _service: MyJobService) { };


  ngOnInit(): void {
   this.getData()
  }
  getData(){
    // const id = 
    if (this.useId) {
      this._service.userprofile(this.useId).subscribe((res:Datas[]) => {
        console.log(res);
        if (res && res.length > 0) {
          this.profile = res[0]; 
        console.log(this.profile);
      }
      });
    } else {
      console.error('User ID not found in local storage');
    }
  
  } 
  addnewskills (postid : string ){
    (async () => {
      const { value: skill } = await Swal.fire({
        input: "text",
        inputLabel: "Enter your new skills",
        inputPlaceholder: "Enter your new skills"
      });
      if (skill) {
        Swal.fire(`${skill}`);
      }
      this._service.addnewskill(skill,postid ).subscribe((res:Datas[]) => {
        this.getData()
console.log(res);
      })})() }
updatepic(postid:string){
(async ()=>{

  const { value: url } = await Swal.fire({
    input: "url",
    inputLabel: "URL address",
    inputPlaceholder: "Enter the image URL"
  });
  if (url) {
    Swal.fire(`Entered URL: ${url}`);
  }
 
  this._service.updateuserprofilepic((url),postid ).subscribe((res:Datas[])=>{
    console.log(res);

    this.getData()
    })
})() }

  
}



  

