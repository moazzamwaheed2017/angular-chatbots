import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './+chat/chat.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent }, 
  { path: 'chat', component: ChatComponent }
];

export const routing = RouterModule.forRoot(routes);
