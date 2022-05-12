import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';

@NgModule({
  imports: [
    BrowserModule,
    DragDropModule,
    ScrollingModule,
  ],
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
