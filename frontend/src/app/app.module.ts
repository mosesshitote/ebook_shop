import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';

import { NewsletterService } from './newsletter/newsletter.service';
import { MessageService } from './message.service';
import { AuthenticationService } from './authentication.service';
import { HttpHeadersService } from './http-headers.service';

import { NavigationComponent } from './navigation/navigation.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidenavPrivateComponent } from './sidenav-private/sidenav-private.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    NavigationComponent,
    SidenavComponent,
    LoginComponent,
    RegistrationComponent,
    SidenavPrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [
    NewsletterService,
    MessageService,
    AuthenticationService,
    HttpHeadersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
