import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { CatalogListComponent } from "src/app/components/catalog-list/catalog-list.component";
import { PaginatorModule }      from "primeng/paginator";
import { PartCardModule }       from "src/app/components/part-card/part-card.module";
import { RouterModule }         from "@angular/router";
import { CatalogueComponent }   from "src/app/pages/catalogue/catalogue.component";
import { DialogModule }         from "primeng/dialog";
import {GalleriaModule} from "primeng/galleria";
import {CarouselModule} from "primeng/carousel";



@NgModule({
  declarations: [
    CatalogListComponent
  ],
  exports: [
    CatalogListComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    PartCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogueComponent,
      },
    ]),
    DialogModule,
    GalleriaModule,
    CarouselModule,
  ]
})
export class CatalogListModule { }
