import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	constructor(
		// public routerService : Router
	) {// console.log(this.routerService.getCurrentNavigation().extras.state);
	}

	// public inCartProducts: any[] = this.routerService.getCurrentNavigation().extras.state? this.routerService.getCurrentNavigation().extras.state.inCartProducts: null
	ngOnInit() {
		
	}

}
