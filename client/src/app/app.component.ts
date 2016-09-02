import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
