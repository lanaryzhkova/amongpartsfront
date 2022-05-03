import { Component, OnInit } from '@angular/core';
import { GetProductService } from "src/app/services/get-product.service";
import { ActivatedRoute }    from "@angular/router";

@Component({
  selector: 'catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  currentProducts: any;
  skip = 0;
  limit = 12;
  totalRecords: any = 0;
  private selectedId!: string | null;
  first: number = 0;

  constructor(private getProducts: GetProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
      this.refresh()
      this.getProduct()
    });
  }

  getProduct(): void {
    switch (this.selectedId) {
      case 'motherboard':
        this.getProducts.getMotherboard(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'ssd':
        this.getProducts.getSsd(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'ram':
        this.getProducts.getRam(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'gpu':
        this.getProducts.getGpu(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'psu':
        this.getProducts.getPsu(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
    }
  }

  paginate(evt: any) {
    this.first = evt.first;
  }

  refresh() {
    this.first = 0;
  }
}
