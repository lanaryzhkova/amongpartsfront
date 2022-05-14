import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchProductService} from "../../services/search-product.service";
import {map} from "rxjs";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {PartPageModule} from "../../pages/part-page/part-page.module";
import {PartPageComponent} from "../../pages/part-page/part-page.component";

@Component({
  selector: 'app-header',
  providers:[ Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openAuth = false;
  openSearch = false;
  productName?: string;
  productCategory?: string;
  productImages?: string;
  productLink?: string;

  text!: any;
  limit!: 12;
  searchString: any;
  currentProduct!: any;
  currentProducts!:any[];
  path?: string;

  constructor(private router: Router,  private route: ActivatedRoute, private searchProduct: SearchProductService, private location: LocationStrategy) { }

  ngOnInit(): void {
  }

  catalogLink() {
    this.router.navigate(['/parts/motherboard'])
  }

  toggleAuthModal():void {
    this.openAuth = !this.openAuth
  }


  search(event: any) {
    this.searchProduct.searchProduct(event.query, 5).subscribe((val)=>
    {
      this.currentProducts = val;
      console.log(val)
      console.log(val.name);
          })
  }

  redirect(event: any) {
    this.path = this.location.path();
    this.router.navigateByUrl( this.path, { skipLocationChange: false}).then(() => {
    this.router.navigate([`/parts/${event.category}/${event.link_name}`]);
    });
    this.text = null;
    window.location.replace(`/parts/${event.category}/${event.link_name}`);
  }
}
