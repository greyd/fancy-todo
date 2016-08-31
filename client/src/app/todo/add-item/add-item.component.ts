import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  inputs: ['todoItem'],
  outputs: ['addItem']
})

export class AddItemComponent {
  todoItem:string;
  addItem:EventEmitter<string> = new EventEmitter();

  add(text:string):void {
    this.addItem.emit(text);
    this.todoItem = '';
  }
}
