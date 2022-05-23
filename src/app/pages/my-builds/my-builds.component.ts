import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-builds',
  templateUrl: './my-builds.component.html',
  styleUrls: ['./my-builds.component.scss']
})
export class MyBuildsComponent implements OnInit {

  builds?: any[];
  countBuild?: number;
  gaming: string[] = [];
  home: string[] = [];
  design: string[] = [];
  office: string[] = [];
  video: string[] = [];
  currentUser?: any = this.auth.currentUser;
  likedBuilds?: any[];

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.auth.getUserProfile().subscribe(res => {
      this.auth.currentUser = res;
      this.currentUser = res;
    })

    this.auth.getUserBuilds().subscribe(res => {
      this.builds = res.builds;
      this.likedBuilds = res.liked_builds
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
