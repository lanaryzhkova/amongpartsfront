import { Component, OnInit } from '@angular/core';
import { GetBuildService }   from "src/app/services/get-build.service";
import { AuthService }       from "src/app/services/auth.service";
import { Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
  providers: [MessageService]

})
export class ConfiguratorComponent implements OnInit {
  allBuild?: any[];
  countBuild?: number;
  gaming: string[] = [];
  home: string[] = [];
  design: string[] = [];
  office: string[] = [];
  video: string[] = [];

  constructor(private getBuildService: GetBuildService, public auth: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBuildService.getBuildAll(0,20).subscribe({
      next: value => {
        this.allBuild = value.data
        this.countBuild = value.amount
      },
      error: err => {
        console.warn(err)
      }
    })
  }

  validImg(image: any) {
    if (/^(ftp|http|https):\/\/[^ "]+$/.test(image)) {
      return image
    } else {
      return undefined
    }
  }

  routingPass(link: any) {
    this.router.navigate([`build/${link}`]);
  }

  like(link: any){
    this.getBuildService.likeBuild(link).subscribe(
      {
        next: res => {
          this.messageService.add({
            severity: 'success',
            summary: 'Уведомление',
            detail: 'Конфигурация добавлена в "Сохранённые конфигурации"'
          });
        },
        error: err => {
          this.messageService.add({severity: 'error', summary: 'Ошибка', detail: `${err.status}: ${err.statusText}`});
        }
      }

    );
  }

}
