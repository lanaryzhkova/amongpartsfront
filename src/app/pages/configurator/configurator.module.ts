import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ConfiguratorComponent} from "./configurator.component";
import {CheckboxModule} from "primeng/checkbox";
import {CardModule} from "primeng/card";

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
  ]
})
export class ConfiguratorModule { }
