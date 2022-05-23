import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-builds-card',
  templateUrl: './my-builds-card.component.html',
  styleUrls: ['./my-builds-card.component.scss']
})
export class MyBuildsCardComponent implements OnInit {

  @Input() name?: string;
  @Input() type?: string;
  @Input() description?: string;
  img = 'https://imgholder.ru/323x300/3d4d65/eceff4';

  @Input() set image(value: any) {
    if (value !== undefined) {
      this.img = value
    }
  }

  @Input() username?: string;
  @Input() specifications!: any[];
  @Input() link_name?: string;

  @Output() routing = new EventEmitter();

  navigate() {
    this.routing.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
