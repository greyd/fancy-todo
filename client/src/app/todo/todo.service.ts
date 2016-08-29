import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const todos: Todo[] = [
  new Todo(1, 'test'),
  new Todo(1, 'test'),
  new Todo(1, 'test'),
  new Todo(1, 'test'),
];

@Injectable()
export class TodoService {
  constructor (private http: Http) {}

  public getToDo(): Promise<Todo[]> {
    return this.http.get('/v1/todo/')
      .toPromise()
      .then(resp => resp.json() as Todo[]);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(todos);
    //   }, 1000);
    // });
  }
}
