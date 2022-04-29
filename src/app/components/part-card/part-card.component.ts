import { Component} from '@angular/core';
import {SsdService} from "../../services/ssd.service";

@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss']
})
export class PartCardComponent {

  ssd?: any[];

  constructor(private ssdService: SsdService) {
   this.getSsd()
  }
  getSsd() {
    this.ssdService.getSsd(0, 12).subscribe(value => {
      this.ssd = value;
    })
  }
}
