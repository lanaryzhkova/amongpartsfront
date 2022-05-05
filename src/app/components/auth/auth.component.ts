import { Component, Input, OnInit }           from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService }                        from "src/app/services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() openAuth = false;
  forgotModal: boolean = false;
  regModal: boolean = false;
  registration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    grant_type: new FormControl('password'),
  });
  constructor(private auth: AuthService) { }

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
}
