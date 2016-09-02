import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{
  title:string = 'USER';
  ngOnInit() {
    console.log('herje');
  }
}
