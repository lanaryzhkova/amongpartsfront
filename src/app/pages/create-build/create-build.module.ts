import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';
import {CreateBuildComponent}             from "./create-build.component";
import {RouterModule}                     from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule}                  from "primeng/inputtext";
import {AutoCompleteModule}               from "primeng/autocomplete";
import {ButtonModule}                     from "primeng/button";
import {DividerModule}                    from "primeng/divider";
import {DropdownModule}                   from "primeng/dropdown";
import { ToastModule }                    from "primeng/toast";



@NgModule({
  declarations: [
    CreateBuildComponent
  ],
  exports: [
    CreateBuildComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CreateBuildComponent,
            },
        ]),
        ReactiveFormsModule,
        InputTextModule,
        AutoCompleteModule,
        FormsModule,
        ButtonModule,
        DividerModule,
        DropdownModule,
        ToastModule
    ]
})
export class CreateBuildModule { }
