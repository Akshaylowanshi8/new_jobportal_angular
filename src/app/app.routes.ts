import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RecruitersDeshboardComponent } from './recruiters-deshboard/recruiters-deshboard.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { LoginComponent } from './login/login.component';
import { AddUserProfileComponent } from './add-user-profile/add-user-profile.component';
import { PostnewjobComponent } from './postnewjob/postnewjob.component';
import { UpdatejobpostComponent } from './updatejobpost/updatejobpost.component';
import { UserAddEducationComponent } from './user-add-education/user-add-education.component';
import { UserAddworkComponent } from './user-addwork/user-addwork.component';
import { authGuard } from './services/auth.guard';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [


    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:"home",component:HomeComponent},
    {path:"login" ,component:LoginComponent},
    {path:"registation",component:UserRegistrationComponent  },
    {path:"peofile",component:UserProfileComponent ,canActivate:[authGuard]},
    {path:"desh",component:RecruitersDeshboardComponent ,canActivate:[authGuard]}   ,
    {path:"job",component:JobListingComponent},
    {path:'userprofile',component:UserProfileComponent ,canActivate:[authGuard]},
    {path:"addprofile",component:AddUserProfileComponent ,canActivate:[authGuard]},
    {path:"postnewjob",component:PostnewjobComponent ,canActivate:[authGuard]},
    {path:"updatepost/:id",component:UpdatejobpostComponent ,canActivate:[authGuard]} ,
    {path:"AddEducation/:id",component:UserAddEducationComponent ,canActivate:[authGuard]},
    {path:"AddExperience/:id",component:UserAddworkComponent ,canActivate:[authGuard]},
    {path:"**" ,component:ErrorComponent}



];
