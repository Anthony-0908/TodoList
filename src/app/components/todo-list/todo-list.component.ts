import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-todo-list',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
   name = new FormControl('');
  // UpdateField(): void {
  //   console.log("this is new field")
  // }

  // count = 0;

  // inc(){this.count++;
  //   console.log('Increment value',this.count);
  // }

  // dec(){this.count--;
  //   console.log('Decrement value' ,this.count);
  // }

}
