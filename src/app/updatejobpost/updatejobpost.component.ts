import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MyJobService } from '../my-job.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Datas } from '../datas';

@Component({
  selector: 'app-updatejobpost',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,],
templateUrl: './updatejobpost.component.html',
  styleUrl: './updatejobpost.component.css'
})
export class UpdatejobpostComponent {

  constructor( private _sirvice:MyJobService , private activerouter :ActivatedRoute , private _rou:Router){}
    postnewjob!: FormGroup
    postd : any = {};
    id:string = "";


  ngOnInit(): void {

      this.activerouter.paramMap.subscribe(res=>{
      let pid = res.get('id')
      console.log(pid);

      this._sirvice.GetEditjobPost(pid).subscribe((data:Datas )=>{ 
        this.id =(data.id);
        const datas  = data;
        console.log(this.postd);
        this.postd = datas
// console.log(this.postd[0].id);
      })  
      })
    const id = localStorage.getItem('userid')
    this.postnewjob = new FormGroup({
      recruiterId : new FormControl(id , Validators.required),
        title        : new FormControl('', Validators.required),
        company      : new FormControl('', Validators.required),
        location     : new FormControl('', Validators.required),
        postedDate   : new FormControl('', Validators.required),
        description  : new FormControl('', Validators.required),
        requirements : new FormControl('', Validators.required),
        type         : new FormControl('', Validators.required),
        industry     : new FormControl('', Validators.required),
      
  });
}

  setValue(){
    this.postnewjob.setValue({
      
      title:"hello"
    })
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
