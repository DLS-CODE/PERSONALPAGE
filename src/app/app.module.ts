import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenst/navbar/navbar.component';
import { HomeComponent } from './componenst/home/home.component';
import { SkillsComponent } from './componenst/skills/skills.component';
import { AboutComponent } from './componenst/about/about.component';
import { ContactComponent } from './componenst/contact/contact.component';
import { LocationComponent } from './componenst/location/location.component';
import { SocialComponent } from './componenst/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    LocationComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
