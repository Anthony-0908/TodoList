import { TodoModels } from './../store/todo/todo.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API = 'https://dummyjson.com/todos';
  constructor(private http:HttpClient) {

  }
   getTodos(): Observable<{todos:TodoModels[]}> {
      return this.http.get<{todos: TodoModels[]}>(this.API);
    }
}
