import { Component, Input, OnInit }           from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService }                        from "src/app/services/auth.service";
import { switchMap }                          from "rxjs";
import { MessageService }                     from "primeng/api";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [MessageService]
})
export class AuthComponent implements OnInit {
  @Input() openAuth = false;
  currentUser?: any = this.auth.currentUser;
  resetModal: boolean = false;
  regModal: boolean = false;
  registration = new FormGroup({
    username: new FormControl('', [Validators.required]),
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


  constructor(public auth: AuthService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  onSubmitRegister(value: any) {
    this.auth.registry(value).subscribe(
      {
        next: (e) => {
          console.log(e)
          this.messageService.add({severity:'success', summary: 'Уведомление', detail: 'Пользователь успешно зарегистрирован!'});
        }
      }
    )
  }

  onSubmitSignIn(value: any) {
    this.auth.signIn(value).pipe(
      switchMap(() => {
        return this.auth.getUserProfile()
      })
    ).subscribe({
      next: res => {
        this.auth.currentUser = res
        this.currentUser = res
        this.messageService.add({severity:'success', summary: 'Уведомление', detail: 'Пользователь успешно вошел в аккаунт!'});

      },
      error: err => {
        console.log(err)
        this.messageService.add({severity:'error', summary: 'Ошибка', detail: `${err.status}: ${err.statusText}`});

      }
    });
  }

  logOut() {
    this.auth.logOutUser().subscribe(res => {
      this.currentUser = res
      this.auth.currentUser = res
      this.login.reset()
    })
  }

  // reset(value: any) {
  //   this.auth.resetPassword(value).subscribe(value => {
  //     console.log(value)
  //   })
  // }
}
