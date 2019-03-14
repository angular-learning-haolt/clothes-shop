import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../app/product';

@Component({
	selector: 'app-product-order',
	templateUrl: './product-order.component.html',
	styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

	constructor() {
	}

	@Input() inCartProducts: any[];

	public summary : number;


	// public addedToCartProducts : any[] = this.selectedProducts;
	ngOnInit() {
		console.log(this.inCartProducts);
	}

	changeQuantity(product, val) {
		switch (val) {
			case -1:
				product.quantity = product.quantity !== 0? product.quantity - 1 : 0;
				break;
			
			case 1:
				product.quantity += 1;
				break;
		}
		localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
	}
}
