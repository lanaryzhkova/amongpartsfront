import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GetBuildService} from "../../services/get-build.service";

@Component({
  selector: 'app-build-page',
  templateUrl: './build-page.component.html',
  styleUrls: ['./build-page.component.scss']
})
export class BuildPageComponent implements OnInit {
  @Input() link?: string;

  id: any;
  category?: string;
  currentBuild: any;
  private subscription?: Subscription;
  isShow = false;

  constructor(private activatedRoute: ActivatedRoute, private getBuild: GetBuildService) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
      this.getBuild.getBuildName(this.id).subscribe((val) => {
        this.currentBuild = val;
      });
    });
  }

  toggleDiv(){
    this.isShow = !this.isShow;
  }

}
