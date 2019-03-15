import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductBill } from './../../app/product-bill';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	constructor(
		private fb: FormBuilder,
		public routerService : Router
	) {
		if (localStorage.getItem('productBills') === null) {
			localStorage.setItem('productBills', JSON.stringify(this.productBills));
		}
		else {
			this.productBills = JSON.parse(localStorage.getItem('productBills'));
		}
	}

	ngOnInit() {
		this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
	}

	public productBill : ProductBill = new ProductBill(null, '',[],[], 0);
	public productBills : ProductBill[] = [];
	public inCartProducts : any[]=[];
	@Input() billSum: number;

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

	get addresses() {
	    return this.customerInfo.get('addresses') as FormArray;
	}

	addAlias() {
	    this.addresses.push(this.fb.control(''));
	}

	onSubmit() {
		let currentID = this.productBills.length;
		this.productBill.id = currentID !== 0 ? currentID + 1: 1;
		this.productBill.name = this.customerInfo.value.name;
		this.productBill.addresses = this.customerInfo.value.addresses;
		this.productBill.products = this.inCartProducts;
		this.productBill.summary = this.billSum;
		// Đã lấy đc Bill
		this.productBills.push(this.productBill);
		// Sau khi thanh toán và lưu bill vào LocalStorage, xóa incartProduct đi và redirect sang history mua hàng :3
		localStorage.setItem('productBills', JSON.stringify(this.productBills));
		localStorage.setItem('inCartProducts', JSON.stringify([]));
		// console.log(this.productBills);
		alert('Your order successfully!');
		this.routerService.navigate(['order-history'], { state: { productBills: this.productBills } });
	}
}
