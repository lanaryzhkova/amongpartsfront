import { Component, OnInit }                      from '@angular/core';
import { ActivatedRoute, Router }                 from "@angular/router";
import { SearchProductService }                   from "../../services/search-product.service";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

@Component({
  selector: 'app-header',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openAuth = false;

  text!: any;
  limit!: 12;
  currentProducts!: any[];
  path?: string;

  constructor(private router: Router, private route: ActivatedRoute, private searchProduct: SearchProductService, private location: LocationStrategy) {
  }

  ngOnInit(): void {
  }

  catalogLink() {
    this.router.navigate(['/parts/motherboard'])
  }

  toggleAuthModal(): void {
    this.openAuth = !this.openAuth
  }


  search(event: any) {
    this.searchProduct.searchProduct(event.query, 5).subscribe(val => this.currentProducts = val.data)
  }

  redirect(event: any) {
    this.path = this.location.path();
    this.router.navigateByUrl(this.path, {skipLocationChange: false}).then(() => {
      this.router.navigate([`/parts/${event.category}/${event.link_name}`]);
    });
    this.text = null;
    window.location.replace(`/parts/${event.category}/${event.link_name}`);
  }
}
