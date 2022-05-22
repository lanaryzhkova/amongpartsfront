import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuildPageComponent} from "./build-page.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [BuildPageComponent],
  exports:[BuildPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BuildPageComponent,
      },
    ]),
    TableModule,
    ButtonModule,
  ]
})
export class BuildPageModule { }
