import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundModule} from "./pages/not-found/not-found.module";
import {HomeModule} from "./pages/home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "src/app/components/header/header.module";
import {CatalogueModule} from "./pages/catalogue/catalogue.module";
import {GuideModule} from "./pages/guide/guide.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NotFoundModule,
    HeaderModule,
    HomeModule,
    CatalogueModule,
    GuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
