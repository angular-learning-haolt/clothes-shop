import { Component, OnInit } from '@angular/core';
import { Product } from './../../app/product';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	constructor(
		public routerService : Router
	) {
		if (this.selectedProduct) {
			if (localStorage.getItem('selectedProducts') === null) {
				localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
			}
			else {
				this.selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
			}
			this.selectedProducts.push(this.selectedProduct);
			localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
		}
	}

	public selectedProduct : Product = this.routerService.getCurrentNavigation().extras.state? this.routerService.getCurrentNavigation().extras.state.selectedProduct: null;
	public selectedProducts : Product[] = [];

	ngOnInit() {
	}

	onBackToProducts() {
		this.routerService.navigate(['']);
	}

	onGoToCheckout() {
		this.routerService.navigateByUrl('checkout');
	}
}

