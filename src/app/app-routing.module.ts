import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [{
  path:'template',
  component:TemplateComponent
} ,{

  path:'reactive',
  component:ReactiveComponent
},{

  path:'',
  component:HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]                               
})
export class AppRoutingModule { }
