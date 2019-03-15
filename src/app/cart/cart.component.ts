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
		if (localStorage.getItem('inCartProducts') === null) {
			localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		}
		else {
			this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
		}

		if (this.selectedProduct) {

			if (this.inCartProducts.length === 0) {
				this.inCartProduct = {...this.selectedProduct};
				this.inCartProduct.quantity = 1;
				this.inCartProducts.push(this.inCartProduct);
				localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
			}
			else {
				let index = this.inCartProducts.findIndex((product)=> product.id === this.selectedProduct.id);
				if (index === -1) {
					this.inCartProduct = {...this.selectedProduct};
					this.inCartProduct.quantity = 1;
					this.inCartProducts.push(this.inCartProduct);
					localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
				}
				else {
					this.inCartProducts[index].quantity += 1;
					localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
				}
			}	
		}
	}

	public selectedProduct : Product = this.routerService.getCurrentNavigation().extras.state? this.routerService.getCurrentNavigation().extras.state.selectedProduct: null;
	public inCartProduct : any; // đoạn này để Product[] đc ko ? ko đc nhưng tại sao -_-
	public inCartProducts : any[] = [];
	public hasCheckOut : boolean = false;
	public billSum : number;

	ngOnInit() {
	}

	onBackToProducts() {
		this.routerService.navigate(['']);
	}

	onCheckout() {
		this.hasCheckOut = true;
		this.billSum = this.getBillSum();
	}

	getBillSum() {
		this.inCartProducts = this.inCartProducts.filter(( product ) => product.quantity !== 0);
		localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		let allPrices = this.inCartProducts.map(a => a.price);
		let allQuantity = this.inCartProducts.map(a => a.quantity);
		let summary = allPrices.map( (price, index) => {
			return price * allQuantity[index];
		});
		return summary.reduce((item1, item2) =>  item1 + item2);
	}
}

