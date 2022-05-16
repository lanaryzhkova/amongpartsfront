import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ComparePartsComponent } from "./compare-parts.component";
import { RouterModule }          from "@angular/router";
import { AutoCompleteModule }    from "primeng/autocomplete";
import { FormsModule }           from "@angular/forms";
import { CardModule }            from "primeng/card";
import { TableModule }           from "primeng/table";

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
    ]),
    AutoCompleteModule,
    FormsModule,
    CardModule,
    TableModule
  ]
})
export class ComparePartsModule {
}
