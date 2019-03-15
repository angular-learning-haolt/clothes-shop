import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	constructor(
		private fb: FormBuilder,
		public routerService : Router
	) { }

	ngOnInit() {
		
	}

	customerInfo = this.fb.group({
		name: ['', [ Validators.required,
     					Validators.maxLength(20)
    ]],
		addresses: this.fb.array([
			this.fb.control('', [
				Validators.required,
	     		Validators.minLength(15)
	    	])
		])
	});

	onSubmit() {
		console.warn(this.customerInfo.value);
		console.log(this.customerInfo);
	}

	get addresses() {
	    return this.customerInfo.get('addresses') as FormArray;
	}

	addAlias() {
	    this.addresses.push(this.fb.control(''));
	}
}
