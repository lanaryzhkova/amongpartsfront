import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent }   from "src/app/pages/catalogue/catalogue.component";
import { CatalogListComponent } from "src/app/components/catalog-list/catalog-list.component";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/auth.module').then(
        (m) => m.AuthModule,
      ),
  },
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
        component: CatalogListComponent,
      }
    ]
  },
  {
    path: 'guide',
    loadChildren: () =>
      import('./pages/guide/guide.module').then(
        (m) => m.GuideModule,
      ),
  },
  {
    path: 'configurator',
    loadChildren: () =>
      import('./pages/configurator/configurator.module').then(
        (m) => m.ConfiguratorModule,
      ),
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

