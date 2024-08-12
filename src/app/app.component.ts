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

  constructor(private rout:Router){}
  title = 'new_Job_portal';
  userinfo :any=""

ngOnInit(): void {
  const data = localStorage.getItem('role')
  this.userinfo = data;
}


logout(){
localStorage.clear()
  setTimeout(() => {
this.rout.navigateByUrl('home')
window.location.reload()
this.rout.navigateByUrl('home')

  }, 300);
}
}


