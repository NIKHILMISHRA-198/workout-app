import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutGridComponent } from './workout-grid.component';

describe('WorkoutGridComponent', () => {
  let component: WorkoutGridComponent;
  let fixture: ComponentFixture<WorkoutGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutGridComponent]
    });
    fixture = TestBed.createComponent(WorkoutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
