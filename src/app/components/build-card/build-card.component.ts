import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router }                                         from "@angular/router";

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

  navigate(value: string) {
    this.routing.emit(value);
    // this.router.navigate([`build/${link}`]);
  }

  @Output() liking = new EventEmitter();

  like() {
    this.liking.emit();
  }

  @Output() opening = new EventEmitter();

  open() {
    this.opening.emit();
  }

  isShow = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
