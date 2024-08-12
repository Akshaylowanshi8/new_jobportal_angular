import { TestBed } from '@angular/core/testing';

import { MyJobService } from './my-job.service';

describe('MyJobService', () => {
  let service: MyJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
