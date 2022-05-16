import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { AuthComponent }       from "src/app/components/auth/auth.component";
import { RouterModule }        from "@angular/router";
import { InputTextModule }     from "primeng/inputtext";
import { ButtonModule }        from "primeng/button";
import { DialogModule }        from "primeng/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import {PasswordModule}        from "primeng/password";
import { ToastModule }         from "primeng/toast";



@NgModule({
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: AuthComponent,
            },
        ]),
        InputTextModule,
        ButtonModule,
        DialogModule,
        ReactiveFormsModule,
        PasswordModule,
        ToastModule,
    ]
})
export class AuthModule { }
