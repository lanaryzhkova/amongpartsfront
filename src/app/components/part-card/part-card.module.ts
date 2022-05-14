import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import {PartCardComponent}          from "./part-card.component";
import {CardModule}                 from "primeng/card";
import {ButtonModule}               from "primeng/button";
import {RouterModule} from "@angular/router";

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
        RouterModule,
    ]
})
export class PartCardModule { }
