import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddworkComponent } from './user-addwork.component';

describe('UserAddworkComponent', () => {
  let component: UserAddworkComponent;
  let fixture: ComponentFixture<UserAddworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
