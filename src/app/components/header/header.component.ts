import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nestedItems = [
    {
      label:'Основные',
      items:[
        {label:'Материнские платы',},
        {label:'Центральные процессоры',},
        {label:'Оперативная память'},
        {label:'SSD-накопители'},
        {label:'HDD-накопители'},
        {label:'Видеокарты'},
        {label:'Звуковые карты'},
        {label:'Блоки питания'},
      ]
    },
    {
      label:'Охлаждение',
      items:[
        {label:'Для процессора'},
        {label:'Для корпуса'},
      ]
    },
    {label:'Дополнительно',
      items:[
        {label:'Термопасты'},
      ]
    },
  ];

}
