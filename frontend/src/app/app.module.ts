import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

import { NewsletterService } from './newsletter/newsletter.service';


@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [
    NewsletterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
