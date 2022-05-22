import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyBuildsCardComponent} from "./my-builds-card.component";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [MyBuildsCardComponent],
  exports: [MyBuildsCardComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class MyBuildsCardModule { }
