import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component'

@NgModule({
  declarations: [ AppComponent, HelloComponent, ProductListComponent],
  imports:      [ BrowserModule, FormsModule, FormsModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
