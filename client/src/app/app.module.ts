import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }     from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';

import { routing, appRoutingProviders } from './app.routing';
import { UserComponent } from "./user/user.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent
  ],
  providers: [ TodoService, appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
