import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { RouterModule }          from "@angular/router";
import { ConfiguratorComponent } from "./configurator.component";
import { CheckboxModule }        from "primeng/checkbox";
import { CardModule }            from "primeng/card";
import { PartCardModule }        from "src/app/components/part-card/part-card.module";
import { PipesModule }           from "src/app/pipes/pipes.module";
import { FormsModule }           from "@angular/forms";
import {BuildCardModule} from "../../components/build-card/build-card.module";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    ConfiguratorComponent
  ],
  exports: [
    ConfiguratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfiguratorComponent,
      },
    ]),
    CheckboxModule,
    CardModule,
    PartCardModule,
    PipesModule,
    FormsModule,
    BuildCardModule,
    ToastModule
  ]
})
export class ConfiguratorModule {
}
