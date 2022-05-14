import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GetProductService} from "../../services/get-product.service";

@Component({
  selector: 'app-part-page',
  templateUrl: './part-page.component.html',
  styleUrls: ['./part-page.component.scss']
})

export class PartPageComponent implements OnInit {
  @Input() link?: string;

  id: any;
  category?: string;
  currentProduct: any;

  constructor(private activatedRoute: ActivatedRoute, private getProduct: GetProductService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.category = this.activatedRoute.snapshot.params['category']
    this.getProduct.getProductByLink(this.category, this.id).subscribe((val) =>{
      this.currentProduct = val;
    });

  }
}
