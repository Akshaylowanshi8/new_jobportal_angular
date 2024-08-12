import { Component } from '@angular/core';
import { MyJobService } from '../my-job.service';
import { Datas } from '../datas';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recruiters-deshboard',
  standalone: true,
  imports: [CommonModule,RouterLink ],
templateUrl: './recruiters-deshboard.component.html',
  styleUrl: './recruiters-deshboard.component.css'
})
export class RecruitersDeshboardComponent {
constructor(public _service:MyJobService ,   private routes:Router  ){ }
post : Datas[] =[]
jobseeker : Datas[] =[]
userId:any = localStorage.getItem('userid');
role :string|null = "jobseeker"
ngOnInit(): void {
console.log(this.userId);
this._service.GetjobListing().subscribe((res:Datas[])=>{
  console.log(res);
    this.post =res.filter(post =>post.recruiterId=== this.userId);
    console.log(this.post);
});
this._service.GetAllUser().subscribe((res:Datas[])=> {
console.log(res);
this.jobseeker =res.filter(user =>user.role === this.role);
console.log(this.jobseeker);
})
}
display:boolean=false;
isdisplay(val:boolean){
this.display=val
}
deletePost(id:string){
  console.log(id);
          Swal.fire({
          title: 'Are you sure want to remove?',
          text: 'You will not be able to recover this file!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )
            this._service.Deletepost(id).subscribe(res => {
             this.post = this.post.filter(item => item.id !== id);
              this.post
               })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
            return
          }
        })

} 
profile: Datas | null = null;

viewProfile(id:string|null){
  this._service.userprofile(id).subscribe((res:Datas[])=>{
    if (res && res.length > 0) {
      this.profile = res[0]; 
    console.log(this.profile);
  }
 else {
  console.error('User ID not found in local storage');
} 
  })


}

}