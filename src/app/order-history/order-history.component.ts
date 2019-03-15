import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-order-history',
	templateUrl: './order-history.component.html',
	styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

	constructor(
		public routerService : Router
	) {
		if (localStorage.getItem('productBills') === null) {
			localStorage.setItem('productBills', JSON.stringify([]));
		}
		else {
			this.productBills = JSON.parse(localStorage.getItem('productBills'));
		}
	}

	ngOnInit() {
		console.log(this.productBills);
	}

	public productBills : any[] = this.routerService.getCurrentNavigation().extras.state? this.routerService.getCurrentNavigation().extras.state.productBills: null;

}
