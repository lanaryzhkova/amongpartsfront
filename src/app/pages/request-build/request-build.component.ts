import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-request-build',
  templateUrl: './request-build.component.html',
  styleUrls: ['./request-build.component.scss'],
  providers: [MessageService]
})
export class RequestBuildComponent implements OnInit {
  types: object[];

  constructor(private messageService: MessageService) {
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

  submitRequest(){
    this.messageService.add({severity:'success', summary: 'Уведомление', detail: 'Заявка отправлена!'});
  }
}
