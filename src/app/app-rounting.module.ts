import { NgModule }            from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AddComponent }   from './add/add.component';
//import { ListComponent }  from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  , { path: 'login', component: LoginComponent }
  , { path: 'add', component: AddComponent }
  //, { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
  , exports: [ RouterModule ]
})

export class AppRoutingModule{}
