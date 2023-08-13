import { Component, Input } from '@angular/core';
import { Workout } from '../model/workout.model';

@Component({
  selector: 'app-workout-grid',
  templateUrl: './workout-grid.component.html',
  styleUrls: ['./workout-grid.component.css']
})
export class WorkoutGridComponent {
@Input() workouts!: Workout[]; 
}
