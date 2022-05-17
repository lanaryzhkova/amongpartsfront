import { Component, OnInit }      from '@angular/core';
import { GetProductService }      from "src/app/services/get-product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SearchProductService }   from "../../services/search-product.service";

@Component({
  selector: 'catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  currentProducts: any;
  searchResult: any;
  product: any;
  skip = 0;
  limit = 12;
  totalRecords: any = 0;
  selectedId!: any;
  first: number = 0;
  displayModal = false;
  category?: string;
  text?: string;
  searchString!: string;
  totalResults: any = 0;
  value1?: string = 'up';
  stateOptions: any[] = [{label: "По возрастанию", value: 1}, {label: "По убыванию", value: -1}];

  constructor(private getProducts: GetProductService, private route: ActivatedRoute, private router: Router, private searchProduct: SearchProductService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
      this.refresh()
      this.skip = 0;
      this.getProduct()
    });
  }

  routingPass(link: any, category = this.selectedId) {
    this.router.navigate([`parts/${this.selectedId}/${link}`]);
  }

  getProduct(direction?: number): void {
    if (direction == -1 || direction == 1) {
      this.getProducts.getProduct(this.selectedId, this.skip, this.limit, 'rating', direction).subscribe((val) => {
        this.currentProducts = val.data
        this.totalRecords = val.amount
      })
    } else {
      this.getProducts.getProduct(this.selectedId, this.skip, this.limit).subscribe((val) => {
        this.currentProducts = val.data
        this.totalRecords = val.amount
      })
    }
  }

  paginate(evt: any) {
    this.first = evt.first;
    this.skip = this.limit * evt.page;
    this.getProduct();
  }

  paginateSearch(evt: any) {
    this.first = evt.first;
    this.skip = this.limit * evt.page;
    this.searchByCategory();
  }

  refresh() {
    this.first = 0;
  }

  openDialog(evt: string) {
    this.displayModal = true

    this.product = this.currentProducts.filter((obj: any) => {
      return obj.name === evt
    })
  }

  searchByCategory() {
    if (this.searchString.length > 0) {
      this.searchProduct.searchProductCategory(this.selectedId !, this.searchString, this.limit).subscribe((val) => {
          this.searchResult = val;
          this.totalResults = val.length;
        }
      )
    }
  }

  check(event: any) {
    this.getProduct(event.value)
  }
}
