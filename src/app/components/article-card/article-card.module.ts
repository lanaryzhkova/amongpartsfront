import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {ArticleCardComponent} from "./article-card.component";

@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  exports: [
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class ArticleCardModule { }
