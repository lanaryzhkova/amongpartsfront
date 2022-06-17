import {Component, Input, OnInit}  from '@angular/core';
import { Subscription, switchMap } from "rxjs";
import {ActivatedRoute}            from "@angular/router";
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

  constructor(private activatedRoute: ActivatedRoute, private getBuild: GetBuildService) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.pipe(
      switchMap((params) => {
        this.id = params['id'];
         return this.getBuild.getBuildName(this.id)
      })
    ).subscribe((val) => {
      this.currentBuild = val;
    });
  }

}
