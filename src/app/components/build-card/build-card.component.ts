import { Component, Input, OnInit, Output } from '@angular/core';
import { Router }                                         from "@angular/router";
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.scss']
})
export class BuildCardComponent implements OnInit {

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

  @Output() liking = new EventEmitter();

  like() {
    this.liking.emit();
  }

  @Output() opening = new EventEmitter();

  open(value?: string) {
    this.opening.emit(value);
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
