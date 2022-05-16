import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { HeaderComponent }   from "src/app/components/header/header.component";
import { RouterModule }      from "@angular/router";
import { SplitButtonModule } from "primeng/splitbutton";
import { AuthModule }        from "src/app/components/auth/auth.module";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {AutoCompleteModule} from "primeng/autocomplete";
import {PaginatorModule} from "primeng/paginator";

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
    AuthModule,
    FormsModule,
    DropdownModule,
    AutoCompleteModule,
    PaginatorModule,
  ]
})
export class HeaderModule {
}
