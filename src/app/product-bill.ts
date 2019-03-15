import { Product } from './product';

export class ProductBill {
	
	public id : number;
	public name : string;
	public addresses : string[];
	public products : any[];
	public summary : number;

	constructor(id: number, name: string, addresses: string[], products : any[], summary : number) {
		this.id = id;
		this.name = name;
		this.addresses = addresses;
		this.products = products;
		this.summary = summary;
	}
}