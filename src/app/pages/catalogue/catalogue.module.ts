import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CatalogueComponent} from "./catalogue.component";
import {ListboxModule} from "primeng/listbox";
import {FormsModule} from "@angular/forms";
import {PartCardModule} from "../../components/part-card/part-card.module";

@NgModule({
  declarations: [
    CatalogueComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogueComponent,
      },
    ]),
    ListboxModule,
    FormsModule,
    PartCardModule
  ]
})
export class CatalogueModule { }
