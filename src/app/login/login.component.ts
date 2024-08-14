import { Component } from '@angular/core';
import  Swal  from 'sweetalert2';
import { MyJobService } from '../my-job.service';
import { Router } from '@angular/router';
import { Datas } from '../datas';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data:Datas[] = []
  constructor( public _service:MyJobService, 
     private routes:Router
    
    ){ }


  ngOnInit(): void {
  this.GetDeta()
  }

  GetDeta(){
    this._service.GetAllUser().subscribe((res:Datas[])=>{
      this.data = res
      })
  }

  loginfun(password:string,username:string){

    console.log(this.data)
    const user = this.data.find(user => user.username === username);
    console.log(user);
    if (user) {
      if (user.password === password) {
        Swal.fire('Thank you...', 'Login succesfully!', 'success')  
        localStorage.setItem("useremail",user.email,)
        localStorage.setItem("username",user.username )
        localStorage.setItem("role",user.role)
        localStorage.setItem("useremail",user.email,)
        localStorage.setItem("userid",user.id)

  this.routes.navigateByUrl("home")
        setTimeout(() => {
          window.location.reload()  
        }, 2000);
      }
       else {
        Swal.fire(
          'Cancelled',
          'Incorrect password:)',
          'error'
        )
        return false; 
      }
    } else {
      Swal.fire(
        'Cancelled',
        'Username not found:)',
        'info'
      )
      return false; 
    }
  return
  }
}