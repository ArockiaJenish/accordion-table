import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import {bootstrapIcon}
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AccordionComponent } from './accordion/accordion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HoverDirective } from "./customDirective/hover.directive"

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AccordionComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
