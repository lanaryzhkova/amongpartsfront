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
    path: 'request',
    loadChildren: () =>
      import('./pages/request-build/request-build.module').then(
        (m) => m.RequestBuildModule,
      ),
  },
  {
    path: 'createbuild',
    loadChildren: () =>
      import('./pages/create-build/create-build.module').then(
        (m) => m.CreateBuildModule,
      ),
  },
  {
    path: 'compare',
    loadChildren: () =>
      import('./pages/compare-parts/compare-parts.module').then(
        (m) => m.ComparePartsModule,
      ),
  },
  {
    path: 'parts/:category/:id',
    loadChildren: () =>
      import('./pages/part-page/part-page.module').then(
        (m) => m.PartPageModule,
      ),
  },
  {
    path: 'build/:id',
    loadChildren: () =>
      import('./pages/build-page/build-page.module').then(
        (m) => m.BuildPageModule,
      ),
  },
  {
    path: 'mybuilds',
    loadChildren: () =>
      import('./pages/my-builds/my-builds.module').then(
        (m) => m.MyBuildsModule,
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

