import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent }   from "src/app/pages/catalogue/catalogue.component";
import { CatalogListComponent } from "src/app/components/catalog-list/catalog-list.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule,
      ),
  },
  {
    path: 'parts',
    component: CatalogueComponent,
    children: [
      {
        path: ':id',
        component: CatalogListComponent
      }
    ]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

