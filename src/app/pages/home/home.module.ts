import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { HomeComponent }         from "src/app/pages/home/home.component";
import { RouterModule }          from "@angular/router";
import { ArticleCardComponent }  from "src/app/components/article-card/article-card.component";
import { ActionCardComponent }   from "src/app/components/action-card/action-card.component";
import { HomePartCardComponent } from "src/app/components/home-part-card/home-part-card.component";

@NgModule({
  declarations: [
    HomeComponent,
    ArticleCardComponent,
    ActionCardComponent,
    HomePartCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ]
})
export class HomeModule {
}
