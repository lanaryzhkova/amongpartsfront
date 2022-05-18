import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import {PartCardComponent} from "./part-card.component";
import {CardModule}        from "primeng/card";
import {ButtonModule}      from "primeng/button";
import {RouterModule}      from "@angular/router";
import { RatingModule }    from "primeng/rating";
import { FormsModule }     from "@angular/forms";

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
    RatingModule,
    FormsModule,
  ]
})
export class PartCardModule { }
