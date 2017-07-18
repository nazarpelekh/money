import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Custom1Component } from './custom1/custom1.component';
import { Custom2Component } from './custom2/custom2.component';
import { Custom3Component } from './custom3/custom3.component';
import { Custom4Component } from './custom4/custom4.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule,  } from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    Custom1Component,
    Custom2Component,
    Custom3Component,
    Custom4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    RouterModule.forRoot([
      { path: 'custom1', component: Custom1Component },
      { path: 'custom2', component: Custom2Component },
      { path: 'custom3', component: Custom3Component },
      { path: 'custom4', component: Custom4Component },
      // { path: '', redirectTo: 'custom1', pathMatch: 'full' } якщо по замовченню робити редірект
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
