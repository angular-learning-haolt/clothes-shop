import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../app/product';

@Component({
	selector: 'app-product-order',
	templateUrl: './product-order.component.html',
	styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

	constructor() { }

	@Input() selectedProducts: Product;

	ngOnInit() {
	}

}
