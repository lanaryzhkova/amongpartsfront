import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequestBuildComponent} from "./request-build.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputMaskModule} from "primeng/inputmask";

@NgModule({
  declarations: [
    RequestBuildComponent
  ],
  exports: [
    RequestBuildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RequestBuildComponent,
      },
    ]),
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
  ]
})
export class RequestBuildModule { }