import {Component, OnInit} from '@angular/core';
import {GetBuildService} from "src/app/services/get-build.service";
import {AuthService} from "src/app/services/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
  providers: [MessageService]

})
export class ConfiguratorComponent implements OnInit {
  allBuild?: any[];
  countBuild!: number;
  gaming: string[] = [];
  home: string[] = [];
  design: string[] = [];
  office: string[] = [];
  video: string[] = [];
  skip = 0;
  limit = 12;
  first: number = 0;
  selectBuild?: any[];
  typeBuild?: string;


  constructor(private getBuildService: GetBuildService, public auth: AuthService, private router: Router, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getBuildService.getBuildAll('', this.skip, this.limit).subscribe({
      next: value => {
        this.allBuild = value.data
        this.countBuild = value.amount
      },
      error: err => {
        console.warn(err)
      }
    })
  }

  paginate(evt: any) {
    this.first = evt.first;
    this.skip = this.limit * evt.page;
    this.getBuildService.getBuildAll('', this.skip, this.limit).subscribe(
      {
        next: value => {
          this.allBuild = value.data
          this.countBuild = value.amount
        },
        error: err => {
          console.warn(err)
        }
      }
    );
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

  like(link: any) {
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

  changeTab(evt: any) {
    switch (evt.index) {
      case (0):
       this.typeBuild = '';
        break;
      case (1):
       this.typeBuild = 'Игровой'
        break;
      case (2):
        this.typeBuild = 'Для дома'
        break;
      case (3):
        this.typeBuild = 'Для офиса'
        break;
      case (4):
        this.typeBuild = 'Для дизайна'
        break;
      case (5):
        this.typeBuild = 'Для видеомонтажа'
        break;
    }
    this.getBuildService.getBuildAll(this.typeBuild, this.skip, this.limit).subscribe(
      {
        next: value => {
          this.selectBuild = value.data
          this.countBuild = value.amount
        },
        error: err => {
          console.warn(err)
        }
      }
    );
  }
}
