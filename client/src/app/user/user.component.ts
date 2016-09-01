import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>{{title}} asd asd ad asd asd asd </h1>`
})
export class UserComponent implements OnInit{
  title:string = 'USER';
  ngOnInit() {
    console.log('herje');
  }
}
