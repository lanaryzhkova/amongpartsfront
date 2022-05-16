import { Component, OnInit } from '@angular/core';
import { GetBuildService }   from "src/app/services/get-build.service";
import { AuthService }       from "src/app/services/auth.service";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {
  allBuild?: any[];
  gaming: string[] = [];
  home: string[] = [];
  design: string[] = [];
  office: string[] = [];

  constructor(private getBuildService: GetBuildService, public auth: AuthService) { }

  ngOnInit(): void {
    this.getBuildService.getBuildAll(0,20).subscribe({
      next: value => {
        this.allBuild = value.data
        console.log(value)
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
}
