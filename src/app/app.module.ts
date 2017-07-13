import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Custom1Component } from './custom1/custom1.component';
import { Custom2Component } from './custom2/custom2.component';

@NgModule({
  declarations: [
    AppComponent,
    Custom1Component,
    Custom2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'custom1', component: Custom1Component },
      { path: 'custom2', component: Custom2Component },
      // { path: '', redirectTo: 'custom1', pathMatch: 'full' } якщо по замовченню робити редірект
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
