import { Component, Input } from '@angular/core';
// import { GetProductService }       from "src/app/services/motherboard.service";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() title?: string;
  @Input() body?: string;
  motherboards?: any[];


  // constructor(private motherboardService: GetProductService) {
  // }

//   getMotherboard() {
//     this.motherboardService.getMotherboard(0, 10).subscribe(value => {
//       this.motherboards = value;
//     })
//   }

// <div *ngFor="let item of motherboards; let i = index" >
// {{i + 1}}. price: {{item.price | json}}, name: {{item.name | json}}
// </div>


}
