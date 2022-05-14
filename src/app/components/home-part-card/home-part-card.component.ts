import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

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

