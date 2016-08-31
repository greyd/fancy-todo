import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public isDone: boolean,
    public text: string,
    public description: string,
    public time: number
  ) {}
}
export enum TodoFilterEnum { All, Done, Undone };
const TODOS = [
  new Todo(1, false, 'test1', '', +new Date()),
  new Todo(2, true, 'test2', '', +new Date()),
  new Todo(3, false, 'test3', '', +new Date()),
  new Todo(4, true, 'test4', '', +new Date())
];

@Injectable()
export class TodoService {
  constructor (private http: Http) {}

  public getToDo(): Todo[] {
    return TODOS;
  }

  // public getToDo(): Promise<Todo[]> {
  //   return this.http.get('/v1/todo/')
  //     .toPromise()
  //     .then(resp => resp.json() as Todo[]);
  // }
}
