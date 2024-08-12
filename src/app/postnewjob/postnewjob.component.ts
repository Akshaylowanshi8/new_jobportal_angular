import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MyJobService } from '../my-job.service';

@Component({
  selector: 'app-postnewjob',
  standalone: true,
  imports: [CommonModule,RouterLink ,ReactiveFormsModule],
  templateUrl: './postnewjob.component.html',
  styleUrl: './postnewjob.component.css'
})
export class PostnewjobComponent {
constructor( private _sirvice:MyJobService ,
  private _rou:Router
 ){}
  postnewjob!: FormGroup

ngOnInit(): void {

  const id = localStorage.getItem('userid')
  this.postnewjob = new FormGroup({
    recruiterId : new FormControl(id , Validators.required),
      title        :  new FormControl('', Validators.required),
      company      : new FormControl('', Validators.required),
      location     : new FormControl('', Validators.required),
      postedDate   : new FormControl('', Validators.required),
      description  : new FormControl('', Validators.required),
      requirements : new FormControl('', Validators.required),
      type         :new FormControl('', Validators.required),
      industry     : new FormControl('', Validators.required),
    
  });
  
}

  onSubmitpost(){
console.log(this.postnewjob.value)
if (this.postnewjob.valid) {
  this._sirvice.postnewjob(this.postnewjob.value).subscribe(response => {
    Swal.fire('post created.. saved!',   'success' )
    this.postnewjob.reset();
    this._rou.navigateByUrl('desh')
  });
  }
}

}
