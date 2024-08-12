import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersDeshboardComponent } from './recruiters-deshboard.component';

describe('RecruitersDeshboardComponent', () => {
  let component: RecruitersDeshboardComponent;
  let fixture: ComponentFixture<RecruitersDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitersDeshboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruitersDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
