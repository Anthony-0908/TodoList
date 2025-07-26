import { Component,signal } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

interface Todo {
  id:number,
  title:string,
  completed:boolean
}@Component({
  selector: 'app-todo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
todos:Todo[] = [];
form!: FormGroup;

   constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  addTodo() {
    if(this.form.invalid) return;

    const {title} = this.form.getRawValue();
    this.todos.push({id: Date.now(), title, completed:false});
    this.form.reset();

  }


  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  remove(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
