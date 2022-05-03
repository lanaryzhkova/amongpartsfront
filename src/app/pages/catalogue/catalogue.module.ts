import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from "@angular/router";
import { CatalogueComponent }       from "./catalogue.component";
import { ListboxModule }            from "primeng/listbox";
import { FormsModule }              from "@angular/forms";
import { PartCardModule }           from "../../components/part-card/part-card.module";
import { PaginatorModule }          from "primeng/paginator";
import { PartDetailedDialogModule } from "src/app/components/part-detailed-dialog/part-detailed-dialog.module";
import { CatalogListModule }        from "src/app/components/catalog-list/catalog-list.module";

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
    PartCardModule,
    PaginatorModule,
    PartDetailedDialogModule,
    CatalogListModule,
  ]
})
export class CatalogueModule {
}
