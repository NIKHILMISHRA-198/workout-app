import { Component } from '@angular/core';
import { Workout } from './model/workout.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workouts: Workout[]=[
    { id: 1, name: 'Legs', youtubeLink: '', img:'https://img.freepik.com/free-vector/training-home-concept-with-man-weights_23-2148487013.jpg' },
    { id: 2, name: 'Triceps', youtubeLink: '' , img:'https://manofmany.com/wp-content/uploads/2022/09/7-One-Arm-Overhead-Extension.jpg'},
    { id: 3, name: 'Legs', youtubeLink: '', img:'https://img.freepik.com/free-vector/training-home-concept-with-man-weights_23-2148487013.jpg' },
    { id: 4, name: 'Triceps', youtubeLink: '' , img:'https://manofmany.com/wp-content/uploads/2022/09/7-One-Arm-Overhead-Extension.jpg'},
    { id: 5, name: 'Legs', youtubeLink: '', img:'https://img.freepik.com/free-vector/training-home-concept-with-man-weights_23-2148487013.jpg' },
    { id: 6, name: 'Triceps', youtubeLink: '' , img:'https://manofmany.com/wp-content/uploads/2022/09/7-One-Arm-Overhead-Extension.jpg'},
  ];
  filteredWorkouts: Workout[]=[];

  ngOnInit(){
  this.filteredWorkouts= [...this.workouts];  
  }

  onSearch(query:String){
    if (query) {
      this.filteredWorkouts = this.workouts.filter(x => 
        x.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredWorkouts = [...this.workouts]; 
    }
  }
  
}
