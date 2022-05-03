import { Component, OnInit }      from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

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

  catalogLink() {
    this.router.navigate(['/parts'])
  }
}
