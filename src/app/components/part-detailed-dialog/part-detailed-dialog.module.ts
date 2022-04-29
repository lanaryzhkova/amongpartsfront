import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { PartDetailedDialogComponent } from "src/app/components/part-detailed-dialog/part-detailed-dialog.component";
import { DialogModule }                from "primeng/dialog";
import { ButtonModule }                from "primeng/button";



@NgModule({
  declarations: [
    PartDetailedDialogComponent
  ],
  exports: [
    PartDetailedDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule
  ]
})
export class PartDetailedDialogModule { }
