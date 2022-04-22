import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ActionCardComponent } from './components/action-card/action-card.component';
import { HomePartCardComponent } from './components/home-part-card/home-part-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { NotfoundcomponentComponent } from './pages/notfoundcomponent/notfoundcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionCardComponent,
    HomePartCardComponent,
    HomeComponent,
    ArticleCardComponent,
    NotfoundcomponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
