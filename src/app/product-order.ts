import { Product } from './product';

export class ProductOrder {
	
	public id : number;
	public name : string;
	public addresses : string[];
	public products : Product[];

	constructor(id: number, name: string, addresses: string[], products : Product[]) {
		this.id = id;
		this.name = name;
		this.addresses = addresses;
		this.products = products;
	}
}