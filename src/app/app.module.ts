import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { ContriesComponent } from './components/contries/contries.component';

@NgModule({
  imports: [
    BrowserModule,
    DragDropModule,
    ScrollingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DragComponent,
    VirtualComponent,
    ContriesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
