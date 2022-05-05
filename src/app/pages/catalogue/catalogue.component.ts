import { Component, OnInit } from '@angular/core';
import { SelectItemGroup }        from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})

export class CatalogueComponent implements OnInit {
  groupedCategories!: SelectItemGroup[];

  constructor(private router: Router) {
  }

  ngOnInit() {
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
          {label: 'Звуковые карты', value: 'sound'},
          {label: 'Блоки питания', value: 'psu'},
        ]
      },
      {
        label: 'Охлаждение',
        items: [
          {label: 'Для процессора', value: 'coolcpu'},
          {label: 'Для корпуса', value: 'coolcase'}
        ]
      },
      {
        label: 'Дополнительно',
        items: [
          {label: 'Оптические приводы', value: 'optical'},
          {label: 'PCI-контроллер', value: 'pci'},
          {label: 'Карманы для накопителей', value: 'enclosure'},
          {label: 'Термопаста', value: 'thermopaste'},
          {label: 'Корпуса', value: 'case'}
        ]
      }
    ]
  }

  linkProduct(product: any) {
    this.router.navigate([`parts/${product.value}`])
  }
}
