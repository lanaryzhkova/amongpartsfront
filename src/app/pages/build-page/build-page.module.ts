import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuildPageComponent} from "./build-page.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";

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
  ]
})
export class BuildPageModule { }
