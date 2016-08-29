import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'todo',
  providers: [TodoService],
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit{
  todos :Todo[];
  constructor (private todoService: TodoService) {}
  ngOnInit() {
    this.todoService.getToDo().then(data => {
      console.log(data)
      this.todos = data
    })
  }

}
