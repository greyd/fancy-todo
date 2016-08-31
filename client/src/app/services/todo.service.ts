import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

const URL = '/v1/todo/';
const HEADERS = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS = new RequestOptions({headers: HEADERS});
export class Todo {
  constructor(
    public id: number,
    public isDone: boolean,
    public text: string,
    public description: string,
    public time: number
  ) {}
}
export enum TodoFilterEnum { All, Done, Undone }

@Injectable()
export class TodoService {
  constructor (private http: Http) {}

  getTodo(): Observable<Todo[]> {
    return this.http
      .get(URL)
      .map(extractData)
      .catch(handleError)
  }
  create(text:string): Observable<Todo> {
    return this.http
      .post(URL, JSON.stringify({text}), OPTIONS)
      .map(extractData)
      .catch(handleError)
  }
  remove(id:number): Observable {
    return this.http.delete(URL + id);
  }
}

function extractData (res:Response) {
  return res.json() || {};
}
function handleError (error:any) {
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg)
}
