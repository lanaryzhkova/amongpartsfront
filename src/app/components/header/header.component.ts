import { Component, OnInit }   from '@angular/core';
import { Router }              from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openAuth = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  catalogLink() {
    this.router.navigate(['/parts'])
  }

  toggleAuthModal():void {
    this.openAuth = !this.openAuth
  }
}
