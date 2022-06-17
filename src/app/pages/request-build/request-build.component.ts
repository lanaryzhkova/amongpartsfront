import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {RequestBuildService} from "../../services/request-build.service";

@Component({
  selector: 'app-request-build',
  templateUrl: './request-build.component.html',
  styleUrls: ['./request-build.component.scss'],
  providers: [MessageService]
})
export class RequestBuildComponent implements OnInit {
  types: object[];
  getObject: any;
  name?: string;
  email?: string;
  phone?: string;
  type?: any;
  description!: string;
  price?: number;

  constructor(private messageService: MessageService, private requestBuild: RequestBuildService) {
    this.types = [
      {name: 'Игровой'},
      {name: 'Для дома'},
      {name: 'Для дизайна'},
      {name: 'Для видеомонтажа'},
      {name: 'Для офиса'},
    ]
  }

  ngOnInit(): void {
  }

  submitRequest() {

    this.getObject = {
      "name": this.name,
      "email": this.email,
      "phone_number": this.phone,
      "description": this.description,
      "price": this.price,
      "type": this.type.name,
    }
    this.requestBuild.requestBuild(this.getObject).subscribe({
      error: err => this.messageService.add({severity:'error', summary: 'Ошибка', detail: `${err.status}: ${err.statusText}`}),
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успех',
          detail: 'Заявка отправлена, скоро мы с вами свяжемся!'
        });
        this.name = '';
        this.email = '';
        this.phone = '';
        this.type = '';
        this.description = '';
        this.price = undefined;
      }
    });
  }
}
