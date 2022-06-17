import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-part-card',
  templateUrl: './home-part-card.component.html',
  styleUrls: ['./home-part-card.component.scss']
})
export class HomePartCardComponent {
  @Input() title?: string;
  @Input() src?: string;
  @Input() link?: any;
}

