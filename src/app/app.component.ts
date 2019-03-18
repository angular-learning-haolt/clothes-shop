import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = '=.=';

	constructor(
	) { }

	public quantityProductInCart : number = 0;
	public inCartProducts : any[] = [];

	ngOnInit() {
	}
	
	displayDropdown() {
		// this.showDropdown = val;
		if (localStorage.getItem('inCartProducts') !== null) {
			if (localStorage.getItem('inCartProducts').split('},{').length > 1) {
				this.quantityProductInCart = localStorage.getItem('inCartProducts').split('},{').length;
			}
			else if (localStorage.getItem('inCartProducts').split('}}').length === 1) {
				this.quantityProductInCart = 1
			}
			else if (localStorage.getItem('inCartProducts') == null) {
				this.quantityProductInCart = 0
			}
			this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
		}
	}
}
