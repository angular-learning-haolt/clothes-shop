import { Component, OnInit } from '@angular/core';
import { Product } from './../../app/product';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	public products : Product[] = [
		new Product(4, 'Blouse', 'https://unixtitan.net/images/clothes-vector-blouse-5.png', 'blouse', 400000),
		new Product(2, 'Sweater', 'https://unixtitan.net/images/kid-clothes-clipart-3.png', 'sweater', 600000),
		new Product(3, 'Blue T-shirt', 'https://unixtitan.net/images/clothes-vector-t-shirt-5.png', 't-shirt', 800000),
		new Product(1, 'Dress', 'https://unixtitan.net/images/vector-costume-2.png', 'dress', 500000),
		new Product(5, 'Blue T-shirt', 'https://unixtitan.net/images/clipart-design-clipart-shirt-9.png', 't-shirt', 200000),
		new Product(5, 'Yellow T-shirt', 'https://unixtitan.net/images/tshirt-clipart-shrit-7.png', 't-shirt', 200000),
		new Product(5, 'Jeans', 'https://unixtitan.net/images/jeans-clipart-work-pants-8.png', 'jeans', 200000)
	]

	public _products : Product[];
	
	public categories = ['blouse', 'sweater', 't-shirt', 'jeans']
	public name : string = '';
	public category : string;
	public price : number;
	constructor() { }

	ngOnInit() {
		this._products = this.getProducts(this.name,this.category, this.price, this.products);
	}

	onSearch() {
		let name = this.name;
		let category = this.category;
		let price = this.price;
		this._products = this.getProducts( name, category, price, this.products);
	}

	getProducts(name?: string, category?: string, price?: number, products?: Product[]) {
		let result : Product[] = products;
		if (name) {
			result = products.filter((product) => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
		}

		switch (category) {
			case '':
				break;
			case 'blouse':
				result = this.products.filter((product) => product.category === category ) 
				break;
			case 't-shirt':
				result = this.products.filter((product) => product.category === category ) 
				break;
			case 'jeans':
				result = this.products.filter((product) => product.category === category ) 
				break;
			default:
				break;
		}

		if (price) {
			result = result.filter((product) => product.price <= price)
		}
		return result;
	}

	onClickInput() {
		// console.log(this.name);
	}
}
