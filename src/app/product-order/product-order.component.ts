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

	ngOnInit() {
		this.onCountSummary(this.inCartProducts);
	}

	changeQuantity(product, val) {
		switch (val) {
			case -1:
				product.quantity = product.quantity !== 0 ? product.quantity - 1 : 0;
				break;
			case 1:
				product.quantity += 1;
				break;
		}
		localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		this.onCountSummary(this.inCartProducts);
	}

	onCountSummary(products: any[]){
		this.summary = 0;
		let i =0;
		let length = products.length;
		for(i ; i < length; i++) {
			this.summary += (products[i].price * products[i].quantity);
		}
	}
}
