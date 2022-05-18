import { Component, OnInit } from '@angular/core';
import { GetBuildService }   from "src/app/services/get-build.service";
import { AuthService }       from "src/app/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {
  allBuild?: any[];
  countBuild?: number;
  gaming: string[] = [];
  home: string[] = [];
  design: string[] = [];
  office: string[] = [];
  video: string[] = [];

  constructor(private getBuildService: GetBuildService, public auth: AuthService, private router: Router) { }

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

}
