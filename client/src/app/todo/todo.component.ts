import { Component, OnInit } from '@angular/core';
import { TodoService, Todo, TodoFilterEnum } from './../services/todo.service';
import { AddItemComponent } from './add-item/add-item.component';
import {Observable} from "rxjs";

@Component({
  selector: 'todo',
  providers: [TodoService],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  directives: [AddItemComponent]
})
export class TodoComponent implements OnInit {
  public todos:Todo[] = [];
  public todoItem:string = 'ololo';
  public filter:TodoFilterEnum = TodoFilterEnum.All;
  public filters:TodoFilterEnum = TodoFilterEnum;

  constructor (private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getTodo()
      .subscribe(
        list => this.todos = list
      )
  }
  addItem(text:string): void {
    this.todoService
      .create(text)
      .subscribe(
        item => {
          let newItem = new Todo(item.id, item.isDone, item.text, item.description, item.time);
          this.todos.push(newItem);
        }
      )
  }
  removeItem(item:Todo): void {
    this.todoService
      .remove(item.id)
      .subscribe(
        done => {
          this.todos = this.todos.filter(todo => todo !== item);
        }
      );
  }
  isUnique():boolean {
    return this.todos.filter(todo => todo.text === this.todoItem).length === 0;
  }
  markSelected(item:Todo):void {
    item.isDone = !item.isDone;
  }
  setFilter(filter:TodoFilterEnum) {
    this.filter = filter;
  }
  getFilteredItems():Todo[] {
    switch(this.filter) {
      case TodoFilterEnum.Done:
        return this.todos.filter(todo => todo.isDone);
      case TodoFilterEnum.Undone:
        return this.todos.filter(todo => !todo.isDone);
      default: return this.todos;
    }
  }
}
