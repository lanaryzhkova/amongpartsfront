import { Component, OnInit }    from '@angular/core';
import { SearchProductService } from "src/app/services/search-product.service";
import { GetProductService }    from "src/app/services/get-product.service";

@Component({
  selector: 'app-compare-parts',
  templateUrl: './compare-parts.component.html',
  styleUrls: ['./compare-parts.component.scss']
})
export class ComparePartsComponent implements OnInit {
  selectedParts: any;
  filteredParts!: any[];
  paramsParts: any[] = [];
  map = new Map();
  arr: any = []

  constructor(private searchProduct: SearchProductService,
              private getProduct: GetProductService) {
  }

  ngOnInit(): void {
  }

  filterParts(e: any) {
    this.searchProduct.searchProduct(e.query, 20).subscribe(val => this.filteredParts = val)
  }

  getPart(e: any) {
    if (this.selectedParts[0].category !== this.selectedParts[this.selectedParts.length - 1].category) {
      alert(
        `
          Ты решил(а) сравнить ${this.selectedParts[0].category} с ${this.selectedParts[this.selectedParts.length - 1].category}?
          Нех** заняться? – взял(а) начистил(а) картошки и приготовил(а),
          соседей угости, там не знаю, кому-нибудь еще что-то сделай,
          помой полы б**ть, подъезд подмети. Выйди во двор нах**,
          пособирай мусор б**ть, и покажи пример свой, что
          я на своей волне б**ть полностью независим(а),
          как инопланетянин нах** на этой планете,
          и мне чужды эти люди какие-то, все это для меня
          такие же организмы как вот трава, растение,
          насекомые, птицы, другие животные,
          а все могу сделать сам(а) и мне ничто не нужно. Нить они потеряли блять
        `
      );
      this.selectedParts.pop();
      return;
    }
    this.arr = []
    this.getProduct.getProductByLink(e.category, e.link_name).subscribe((val) => {
      this.paramsParts.push(val);
      val.specifications.forEach((e: any) => {
        this.map.set(e.key, [])
      })
      for (let item of this.map.keys()) {
        let arr = this.map.get(item);
        arr.push(new Array(1).fill(''));
        for (let i = 0; i < this.paramsParts.length; i++) {
          let product = this.paramsParts[i]
          product.specifications.forEach((e: any) => {
            if (e.key === item) {
              arr.splice(i, 1, e.value)
            }
          })
        }
      }
      for (let item of this.map.entries()) {
        this.arr.push(item)
      }
    });
  }

  unselected(e: any) {
    for (let i=0; i<this.paramsParts.length; i++) {
      if (this.paramsParts[i].name == e.name) {
        if (i == 0 && this.paramsParts.length === 1) {
          this.map = new Map();
          this.paramsParts = [];
          this.arr = [];
          this.selectedParts = undefined
          return;
        }
        for (let item of this.map.keys()) {
          let arr = this.map.get(item);
          arr.splice(i, 1)
        }
        this.paramsParts.splice(i, 1)
        for (let item of this.map.entries()) {
          this.arr.push(item)
        }
      }
    }
  }
}


