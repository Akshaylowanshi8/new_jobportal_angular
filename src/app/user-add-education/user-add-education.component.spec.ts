import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddEducationComponent } from './user-add-education.component';

describe('UserAddEducationComponent', () => {
  let component: UserAddEducationComponent;
  let fixture: ComponentFixture<UserAddEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
