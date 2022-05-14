import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute }                      from "@angular/router";
import { GetProductService }        from "../../services/get-product.service";
import { Subscription }             from "rxjs";

@Component({
  selector: 'app-part-page',
  templateUrl: './part-page.component.html',
  styleUrls: ['./part-page.component.scss']
})

export class PartPageComponent implements OnInit, OnDestroy {
  @Input() link?: string;

  id: any;
  category?: string;
  currentProduct: any;
  private subscription?: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private getProduct: GetProductService) {

  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
      this.category = params['category']
      this.getProduct.getProductByLink(this.category, this.id).subscribe((val) => {
        this.currentProduct = val;
      });
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
