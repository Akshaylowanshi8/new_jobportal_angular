import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnewjobComponent } from './postnewjob.component';

describe('PostnewjobComponent', () => {
  let component: PostnewjobComponent;
  let fixture: ComponentFixture<PostnewjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostnewjobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostnewjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
