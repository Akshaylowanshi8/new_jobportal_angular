import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MyJobService } from '../my-job.service';


@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {
  
  job: any[] = [];
  filteredJobs: any[] = [];
  searchForm: FormGroup;
  noResults: boolean = false;

  constructor(private _jobService:MyJobService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      keyword: ['']
    });
  }

  ngOnInit(): void {

    this._jobService.GetjobListing().subscribe((res: any) => {
      this.job = res;
      this.filteredJobs = this.job;
      this.searchForm.valueChanges.subscribe(() => this.filterJobs());
    });
  }
  filterJobs() {
    const keyword = this.searchForm.get('keyword')?.value.toLowerCase();
    this.filteredJobs = this.job.filter((job: any) =>
      !keyword || 
      job.title.toLowerCase().includes(keyword) ||
      job.description.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword) ||
      job.industry.toLowerCase().includes(keyword) ||
      job.type.toLowerCase().includes(keyword)
    );
    this.noResults = this.filteredJobs.length === 0;
  }
}
