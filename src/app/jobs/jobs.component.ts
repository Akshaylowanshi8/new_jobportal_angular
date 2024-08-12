import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyJobService } from '../my-job.service';
import { Datas } from '../datas';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

  constructor(private _servic:MyJobService){}

data:Datas[]=[]


ngOnInit(): void {
  this._servic.GetjobListing().subscribe((res:Datas[])=>{this.data=res})
}


}
