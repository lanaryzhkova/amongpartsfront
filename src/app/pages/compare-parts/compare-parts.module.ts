import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComparePartsComponent} from "./compare-parts.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ComparePartsComponent
  ],
  exports: [
    ComparePartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComparePartsComponent,
      }
    ])
  ]
})
export class ComparePartsModule { }
