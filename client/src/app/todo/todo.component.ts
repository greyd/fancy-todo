import { Component, OnInit } from '@angular/core';
import { TodoService, Todo, TodoFilterEnum } from './../services/todo.service';
import { AddItemComponent } from './add-item/add-item.component';

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
    this.todos = this.todoService.getToDo();
  }
  addItem(name:string): void {
    this.todos.push(new Todo(null, false, name, '', +new Date()))
  }
  removeItem(item:Todo) {
    this.todos = this.todos.filter(todo => todo !== item);
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
