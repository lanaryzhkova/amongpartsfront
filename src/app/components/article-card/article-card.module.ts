import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {ArticleCardComponent} from "./article-card.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  exports: [
    ArticleCardComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        RouterModule
    ]
})
export class ArticleCardModule { }
