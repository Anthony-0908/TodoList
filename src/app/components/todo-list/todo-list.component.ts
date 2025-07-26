import { Component,signal } from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms'

interface Todo {
  id:number,
  title:string,
  completed:boolean
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
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
  //  name = new FormControl('');
  // // UpdateField(): void {
  // //   console.log("this is new field")
  // // }

  // // count = 0;

  // // inc(){this.count++;
  // //   console.log('Increment value',this.count);
  // // }

  // // dec(){this.count--;
  // //   console.log('Decrement value' ,this.count);
  // // }

}
