import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchProductService} from "../../services/search-product.service";
import {CreateBuildService} from "../../services/create-build.service";

@Component({
  selector: 'app-create-build',
  templateUrl: './create-build.component.html',
  styleUrls: ['./create-build.component.scss']
})
export class CreateBuildComponent implements OnInit {

  currentProduct?: any;
  text: any;
  limit: number = 25;
  textMotherboard: any;
  mapi = new Map();
  getObject: any;
  textCpu: any;
  textPsu: any;
  textRam: any;
  textGpu: any;
  textSsd: any;
  textHdd: any;
  textSound: any;
  textCpuCooling: any;
  textCase: any;
  textCaseCooling: any;
  textOptical: any;
  textPci: any;
  textEnclosure: any;
  textPaste: any;
  textName: any;
  textType: any;
  textDesc: any;
  types: any;

  constructor(private searchProduct: SearchProductService, private sendBuild: CreateBuildService) {
    this.types = [
      {name: 'Игровой'},
      {name: 'Для дома'},
      {name: 'Для дизайна'},
      {name: 'Для видеомонтажа'},
      {name: 'Для офиса'},
  ]
  }

  ngOnInit(): void {

  }

  onSubmitForm() {
    this.getObject = {
      "name": this.textName,
      "type": this.textType,
      "description": this.textDesc,
      "image": this.textCase.images,
      "specifications": {
        "motherboard": this.textMotherboard?.link_name,
        "cpu": this.textCpu?.link_name,
        "ram": this.textRam?.link_name,
        "ssd": this.textSsd?.link_name,
        "hdd": this.textHdd?.link_name,
        "gpu": this.textGpu?.link_name,
        "psu": this.textPsu?.link_name,
        "case": this.textCase?.link_name,
        "sound": this.textSound?.link_name,
        "cpu_cooling": this.textCpuCooling?.link_name,
        "case_cooling": this.textCaseCooling?.link_name,
        "enclosure": this.textEnclosure?.link_name,
        "pci": this.textPci?.link_name,
        "optical": this.textOptical?.link_name,
        "paste": this.textPaste?.link_name,
      }
    }
    console.log(this.getObject)
    // this.sendBuild.sendBuild(this.getObject).subscribe();
  }

  searchMotherboard(event: any) {

    this.searchProduct.searchProductCategory('motherboard', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchSsd(event: any) {
    this.searchProduct.searchProductCategory('ssd', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchRam(event: any) {
    this.searchProduct.searchProductCategory('ram', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchGpu(event: any) {
    this.searchProduct.searchProductCategory('gpu', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchPsu(event: any) {
    this.searchProduct.searchProductCategory('psu', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchCpu(event: any) {
    this.searchProduct.searchProductCategory('cpu', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchHdd(event: any) {
    this.searchProduct.searchProductCategory('hdd', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchOptical(event: any) {
    this.searchProduct.searchProductCategory('optical', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchPci(event: any) {
    this.searchProduct.searchProductCategory('pci', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchSound(event: any) {
    this.searchProduct.searchProductCategory('sound', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchPaste(event: any) {
    this.searchProduct.searchProductCategory('paste', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchEnclosure(event: any) {
    this.searchProduct.searchProductCategory('enclosure', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchCase(event: any) {
    this.searchProduct.searchProductCategory('case', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchCaseCooling(event: any) {
    this.searchProduct.searchProductCategory('case_cooling', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  searchCpuCooling(event: any) {
    this.searchProduct.searchProductCategory('cpu_cooling', event.query, this.limit).subscribe((val) => {
      this.currentProduct = val;
    })
  }

  console() {
    this.mapi.set(this.textMotherboard.category, this.textMotherboard.name)
    console.log(this.mapi)
  }
}
