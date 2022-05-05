import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { AuthComponent }   from "src/app/components/auth/auth.component";
import { RouterModule }    from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule }    from "primeng/button";



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
  ]
})
export class AuthModule { }
