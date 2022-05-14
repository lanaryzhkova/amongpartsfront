import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PartPageComponent} from "./part-page.component";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    PartPageComponent
  ],
  exports:[
    PartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PartPageComponent,
      },
    ]),
    CarouselModule,
    TableModule,
  ]
})
export class PartPageModule { }
