import { Product } from './product';

export class ProductBill {
	
	public id : number;
	public name : string;
	public addresses : string[];
	public products : any[];

	constructor(id: number, name: string, addresses: string[], products : any[]) {
		this.id = id;
		this.name = name;
		this.addresses = addresses;
		this.products = products;
	}
}