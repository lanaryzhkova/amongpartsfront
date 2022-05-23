import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyBuildsComponent} from "./my-builds.component";
import {RouterModule} from "@angular/router";
import {BuildCardModule} from "../../components/build-card/build-card.module";
import {PipesModule} from "../../pipes/pipes.module";
import {MyBuildsCardModule} from "../../components/my-builds-card/my-builds-card.module";


@NgModule({
  declarations: [MyBuildsComponent],
  exports: [MyBuildsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyBuildsComponent,
      },
    ]),
    BuildCardModule,
    PipesModule,
    MyBuildsCardModule,
  ]
})
export class MyBuildsModule {
}
