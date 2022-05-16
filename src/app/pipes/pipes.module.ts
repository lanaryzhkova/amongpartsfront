import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { TypeCheckboxPipe } from "src/app/pipes/type-checkbox.pipe";



@NgModule({
  declarations: [
    TypeCheckboxPipe
  ],
  exports: [
    TypeCheckboxPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
