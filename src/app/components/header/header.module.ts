import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { HeaderComponent }   from "src/app/components/header/header.component";
import { RouterModule }      from "@angular/router";
import { SplitButtonModule } from "primeng/splitbutton";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SplitButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeaderComponent,
      },
    ]),
  ]
})
export class HeaderModule { }
