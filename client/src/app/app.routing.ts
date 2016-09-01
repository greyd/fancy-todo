import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from "./user/user.component";

const appRoutes:Routes = [{
  path: '',
  redirectTo: 'test',
  pathMatch: 'full'
}, {
  path: 'test',
  component: TodoComponent
}, {
  path: 'user',
  component: UserComponent
}];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
