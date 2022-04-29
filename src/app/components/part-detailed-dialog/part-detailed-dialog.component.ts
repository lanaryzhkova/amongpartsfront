import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-part-detailed-dialog',
  templateUrl: './part-detailed-dialog.component.html',
  styleUrls: ['./part-detailed-dialog.component.scss']
})
export class PartDetailedDialogComponent implements OnInit {
  @Input() displayModal?: boolean;


  @Output() closingModal = new EventEmitter;
  closeModal(){
    this.closingModal.emit()
  }
  constructor() { }

  ngOnInit(): void {

  }

}
