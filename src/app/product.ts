export class Product {
	
	public id : number;
	public name : string;
	public imgUrl : string;
	public category : string;
	public price : number;

	constructor(id: number, name: string, imgUrl: string, category : string, price : number) {
		this.id = id;
		this.name = name;
		this.imgUrl = imgUrl;
		this.category = category;
		this.price = price;
	}
}