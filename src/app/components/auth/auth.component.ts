import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  AuthService
} from "src/app/services/auth.service";
import { switchMap } from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() openAuth = false;
  currentUser?: any;
  resetModal: boolean = false;
  regModal: boolean = false;
  registration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  login = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),

  });
  resetForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmitRegister(value: any) {
    console.log(value)
    this.auth.registry(value).subscribe((e) => {
      console.log(e)
      alert('Пользователь успешно зарегистрирован!')
    })
  }

  onSubmitLogin(value: any) {
    console.log(value)
    this.auth.login(value).subscribe((e) => {
      console.log(e)
      alert('Пользователь успешно вошел в аккаунт!')
    })
  }

  onSubmitSignIn(value: any) {
    this.auth.signIn(value).pipe(
      switchMap(() => {
        return this.auth.getUserProfile()
      })
    ).subscribe(res => {
      this.currentUser = res
      console.log(this.currentUser)
    });
  }

  logOut() {
    this.auth.logOutUser().subscribe(res => {
      this.currentUser = res
      this.login.reset()
    })
  }

  reset(value: any) {
    this.auth.resetPassword(value).subscribe(value => {
      console.log(value)
    })
  }
}
