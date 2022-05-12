import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';

@NgModule({
  imports: [
    BrowserModule,
    ScrollingModule,
  ],
  declarations: [
    AppComponent,
    VirtualComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
