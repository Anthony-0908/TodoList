import { Routes } from '@angular/router';
import { TodoComponent } from './features/todo/todo.component';
export const routes: Routes = [
  {path:'', loadComponent:() => import('./features/todo/todo.component').then(m => m.TodoComponent)},
];
