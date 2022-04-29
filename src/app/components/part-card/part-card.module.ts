import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import {PartCardComponent}          from "./part-card.component";
import {CardModule}                 from "primeng/card";
import {ButtonModule}               from "primeng/button";
import { PartDetailedDialogModule } from "src/app/components/part-detailed-dialog/part-detailed-dialog.module";

@NgModule({
  declarations: [
    PartCardComponent
  ],
  exports:[
    PartCardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PartDetailedDialogModule
  ]
})
export class PartCardModule { }
