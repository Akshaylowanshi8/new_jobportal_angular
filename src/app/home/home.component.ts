import { Component } from '@angular/core';
import { JobsComponent } from "../jobs/jobs.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
