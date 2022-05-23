import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuildCardComponent} from "./build-card.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [BuildCardComponent],
  exports: [BuildCardComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ]
})
export class BuildCardModule { }
