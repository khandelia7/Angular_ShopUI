export class Product {
    constructor( public prodId: number, public productName: string, public CatId: number) { 
    }
}

export const Products: Array<Product> = new Array<Product>();
Products.push(new Product(1001, "Men's Fashion", 101));
Products.push(new Product(1002, "Women's Fashion", 101));
Products.push(new Product(1003, "ACCESSORIES", 101));
Products.push(new Product(1004, "Shoes", 101));
Products.push(new Product(1005, "Stores", 101));

Products.push(new Product(1006, "TV, AUDIO & CAMERAS", 102));
Products.push(new Product(1007, "APPLIANCES", 102));

Products.push(new Product(1008, "Furniture", 103));

Products.push(new Product(1011, "Engine Care", 104));

Products.push(new Product(1015, "SPORTS & FITNESS", 105));
Products.push(new Product(1016, "BAGS", 105));

Products.push(new Product(1020, "MOVIES & TV SHOWS", 106));

Products.push(new Product(1021, "Grocery & Gourmet Foods", 107));

Products.push(new Product(1024, "Home Security System", 108));









