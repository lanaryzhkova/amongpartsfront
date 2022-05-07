import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ConfiguratorComponent} from "./configurator.component";

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
  ]
})
export class ConfiguratorModule { }
