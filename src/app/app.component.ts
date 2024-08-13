import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Datas } from './datas';
import { FooterComponent } from './footer/footer.component';
import { AddUserProfileComponent } from "./add-user-profile/add-user-profile.component";

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
  constructor(private rout:Router){}
  


ngOnInit(): void {
this.GetData()
 
}
GetData(){   
this.userinfo = localStorage.getItem('role')
}


logout(){
localStorage.clear()
this.ngOnInit()
this.rout.navigateByUrl('home')
}
}


