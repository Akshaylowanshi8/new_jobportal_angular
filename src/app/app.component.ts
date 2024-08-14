import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Datas } from './datas';
import { FooterComponent } from './footer/footer.component';
import { AddUserProfileComponent } from "./add-user-profile/add-user-profile.component";
import { MyJobService } from './my-job.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent, RouterLink,] ,
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'new_Job_portal';
userinfo :any = ""
username:string |null =""
btn:boolean = false;
profile: string | null|undefined= null;
userid:any=null

constructor(private rout:Router ,
  public _service:MyJobService


){}
  


ngOnInit(): void {
this.GetData()
}
GetData(){   
this.userinfo = localStorage.getItem('role')
this.username = localStorage.getItem('username')
this.userid  = localStorage.getItem('userid')
this.viewProfile(this.userid)
}



dispro(val:boolean){
this.btn = val; 
}


logout(){
localStorage.clear()
this.ngOnInit()
this.rout.navigateByUrl('home')
}

viewProfile(userid:string|null ){
  console.log(this.userid);
  this._service.userprofile(userid).subscribe((res:Datas[])=>{
    if (res && res.length > 0) {
      this.profile = res[0].profilePicture; 
    console.log(this.profile);
  }
 else {
  console.error('User ID not found in local storage');
} 
  })


}
}


