import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    ContactRoutingModule,
    AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
