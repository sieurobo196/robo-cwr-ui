import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    LeftMenuComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
