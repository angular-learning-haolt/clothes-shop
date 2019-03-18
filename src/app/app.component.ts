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
		if (localStorage.getItem('inCartProducts') !== null) {
			this.quantityProductInCart = JSON.parse(localStorage.getItem('inCartProducts')).length;
			this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
		}
	}
}
