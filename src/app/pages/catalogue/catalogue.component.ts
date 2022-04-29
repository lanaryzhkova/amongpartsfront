import { Component} from '@angular/core';
import {SelectItemGroup} from "primeng/api";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})

export class CatalogueComponent {

  groupedCategories: SelectItemGroup[];
  selectedCountries!: any[];
  constructor() {

    this.groupedCategories = [
      {
        label: 'Основные',
        items: [
          {label: 'Материнские платы', value: 'Материнские платы'},
          {label: 'Центральные процессоры', value: 'Центральные процессоры'},
          {label: 'Оперативная память', value: 'Оперативная память'},
          {label: 'SSD-накопители', value: 'SSD-накопители'},
          {label: 'HDD-накопители', value: 'HDD-накопители'},
          {label: 'Видеокарты', value: 'Видеокарты'},
          {label: 'Звуковые карты', value: 'Звуковые карты'},
          {label: 'Блоки питания', value: 'Блоки питания'},
        ]
      },
      {
        label: 'Охлаждение',
        items:[
          {label: 'Для процессора', value: 'Для процессора'},
          {label: 'Для корпуса', value: 'Для корпуса'}
        ]
      },
      {
        label: 'Дополнительно',
        items:[
          {label: 'Термопаста', value: 'Термопаста'},
          {label: 'Корпуса', value: 'Корпуса'}
        ]
      }
    ]
  }
}
