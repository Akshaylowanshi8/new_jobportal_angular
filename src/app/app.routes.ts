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

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"login" ,component:LoginComponent},
    {path:"registation",component:UserRegistrationComponent},
    {path:"peofile",component:UserProfileComponent},
    {path:"desh",component:RecruitersDeshboardComponent},
    {path:"job",component:JobListingComponent},
    {path:'userprofile',component:UserProfileComponent},
    {path:"addprofile",component:AddUserProfileComponent },
    {path:"postnewjob",component:PostnewjobComponent},
    {path:"updatepost/:id",component:UpdatejobpostComponent}

];
