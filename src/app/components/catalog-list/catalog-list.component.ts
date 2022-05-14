import { Component, OnInit } from '@angular/core';
import { GetProductService } from "src/app/services/get-product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  currentProducts: any;
  product: any;
  skip = 0;
  limit = 12;
  totalRecords: any = 0;
  selectedId!: string | null;
  first: number = 0;
  displayModal = false;
  category?: string;

  constructor(private getProducts: GetProductService, private route: ActivatedRoute, private router: Router) {
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
      case 'cpu':
        this.getProducts.getCpu(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'hdd':
        this.getProducts.getHdd(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'optical':
        this.getProducts.getOptical(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'pci':
        this.getProducts.getPci(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'sound':
        this.getProducts.getSound(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'paste':
        this.getProducts.getThermopaste(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'enclosure':
        this.getProducts.getDiskEnclosure(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'case':
        this.getProducts.getCase(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'case_cooling':
        this.getProducts.getCaseCooling(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
      case 'cpu_cooling':
        this.getProducts.getCpuCooling(this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
    }
  }

  paginate(evt: any) {
    this.first = evt.first;
    this.skip = this.limit * evt.page;
    this.getProduct();
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
}
