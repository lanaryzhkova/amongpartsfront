import { Component, OnInit }  from '@angular/core';
import { SelectItemGroup }    from "primeng/api";
import { MotherboardService } from "src/app/services/motherboard.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})

export class CatalogueComponent implements OnInit {
  skip = 0;
  limit = 12;
  groupedCategories!: SelectItemGroup[];
  openDialog: boolean = false;

  // TODO: МЕНЯТЬ В ЗАВИСИМОСТИ ОТ ПЕРВОГО ГЕТ ЗАПРОСА В NgOnInit
  selectedCategory?: any = 'ssd';

  currentProducts?: any;
  currentProduct?: any;
  totalRecords: any = 0;



  constructor(private getProducts: MotherboardService) {
  }

  ngOnInit() {
    this.getProducts.getSsd(0, 12).subscribe((val) => {
      this.currentProducts = val.data
      this.totalRecords = val.amount
    })
    this.groupedCategories = [
      {
        label: 'Основные',
        items: [
          {label: 'Материнские платы', value: 'motherboard'},
          {label: 'Центральные процессоры', value: 'cpu'},
          {label: 'Оперативная память', value: 'ram'},
          {label: 'SSD-накопители', value: 'ssd'},
          {label: 'HDD-накопители', value: 'hdd'},
          {label: 'Видеокарты', value: 'gpu'},
          {label: 'Звуковые карты', value: 'Звуковые карты'},
          {label: 'Блоки питания', value: 'psu'},
        ]
      },
      {
        label: 'Охлаждение',
        items: [
          {label: 'Для процессора', value: 'coolcpu'},
          {label: 'Для корпуса', value: 'coolcorpus'}
        ]
      },
      {
        label: 'Дополнительно',
        items: [
          {label: 'Термопаста', value: 'thermopaste'},
          {label: 'Корпуса', value: 'corpus'}
        ]
      }
    ]
  }

  getProduct(): void {
    console.log(this.skip)
    this.currentProduct = this.selectedCategory;
    switch (this.selectedCategory) {
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
        this.getProducts.getPsu (this.skip, this.limit).subscribe((val) => {
          this.currentProducts = val.data
          this.totalRecords = val.amount
        })
        break;
    }
  }

  nextStep(evt: any,) {
    this.skip = evt.first
    this.skip = this.skip * this.limit;
    this.currentProducts = null;
    console.log(this.skip)
    this.getProduct();
  }

  showModalDialog() {
    this.openDialog = true;
  }

  closeDialog() {
    this.openDialog = false;
  }

}
