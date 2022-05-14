import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss']
})
export class PartCardComponent {
  @Input() name?: string;
  @Input() images?: any | null = 'https://imgholder.ru/323x300/3d4d65/eceff4';
  @Input() set description(value: any) {
    this.refactorDescription =  `${value.substr(0, 60)}...`
  }
  @Input() category!: string | null;
  @Input() link?: string;
  @Output() ModalDialog = new EventEmitter<string>();
  refactorDescription = 'Нет описания'

  constructor() {

  }



  showModalDialog() {
    this.ModalDialog.emit(this.name)
  }
}
