import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JenishComponent } from './jenish/jenish.component';

const routes: Routes = [
  {component:HomeComponent,path:'home'},
  {component:JenishComponent, path:'jenish'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
