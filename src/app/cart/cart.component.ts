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
		// if (this.selectedProduct) {
		// 	if (localStorage.getItem('selectedProducts') === null) {
		// 		localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
		// }
		// else {
		// 	this.selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
		// }
		// this.selectedProducts.push(this.selectedProduct);
		// localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
		// }
		if (this.selectedProduct !== null) {
			this.inCartProduct.quantity = 1;
			// this.inCartProducts.push(this.inCartProduct);
			console.log(this.inCartProducts);


			if (localStorage.getItem('inCartProducts') === null) {
					localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
			}
			else {
				this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
			}
			this.inCartProducts.push(this.selectedProduct);
			localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		}
	}

	public selectedProduct : Product = this.routerService.getCurrentNavigation().extras.state? this.routerService.getCurrentNavigation().extras.state.selectedProduct: null;
	public inCartProduct : any = {...this.selectedProduct}; // đoạn này để Product[] đc ko ? ko đc nhưng tại sao -_-
	public inCartProducts : any[] = [];

	ngOnInit() {
	}

	onBackToProducts() {
		this.routerService.navigate(['']);
	}

	onGoToCheckout() {
		this.routerService.navigateByUrl('checkout');
	}
}

