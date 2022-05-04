import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuideComponent} from "./guide.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    GuideComponent
  ],
  exports: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GuideComponent,
      },
    ]),
  ]
})
export class GuideModule { }
