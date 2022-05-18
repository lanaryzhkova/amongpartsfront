import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss']
})
export class PartCardComponent {
  @Input() name?: string;
  img =  'https://imgholder.ru/323x300/3d4d65/eceff4';
  @Input() set images(value: any) {
    if (value !== undefined) {
      this.img = value
    }

  }
  @Input() set description(value: any) {
    this.refactorDescription =  `${value.substr(0, 60)}...`
  }
  @Input() category!: string | null;
  @Input() link?: string;

  ratingText = 0;
  @Input() set rating(value: number){
    if (value !== null) {
      this.ratingText = value
    }
  }
  refactorDescription = 'Нет описания'

  constructor() {

  }
}
