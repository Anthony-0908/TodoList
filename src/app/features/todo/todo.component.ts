import { Component } from '@angular/core';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
@Component({
  selector: 'app-todo',
  imports: [TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
 task = "Learn angular basics"
}
