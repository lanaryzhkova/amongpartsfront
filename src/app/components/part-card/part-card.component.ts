import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss']
})
export class PartCardComponent {
  @Input() name?: string;
  @Input() images?: any | null = 'https://imgholder.ru/323x300/3d4d65/eceff4';
  @Input() description?: string | null = 'Нет описания';
  @Output() ModalDialog = new EventEmitter<string>();

  constructor() {

  }

  showModalDialog() {
    this.ModalDialog.emit(this.name)
  }
}
