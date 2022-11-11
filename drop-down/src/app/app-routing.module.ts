import { AccordionComponent } from './accordion/accordion.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"test", component: TestComponent},
  {path:'accordion', component: AccordionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
