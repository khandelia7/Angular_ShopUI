export class SubProduct {
    constructor( public subProdId: number, public subProductName: string, 
                 public vendorName: string, public price: number, public prodId: number) { 
    }
}

export const SubProducts: Array<SubProduct> = new Array<SubProduct>();
SubProducts.push(new SubProduct(1, "Product 1", "abc", 1234, 1001));
SubProducts.push(new SubProduct(2, "Product 2", "pqr", 234, 1001));
SubProducts.push(new SubProduct(3, "Product 3", "xyz", 1934, 1002));
SubProducts.push(new SubProduct(4, "Product 4", "efc", 7834, 1002));
SubProducts.push(new SubProduct(5, "Product 5", "abc", 346, 1003));
SubProducts.push(new SubProduct(6, "Product 6", "pqr", 3674, 1003));
SubProducts.push(new SubProduct(7, "Product 7", "xyz", 2434, 1004));
SubProducts.push(new SubProduct(8, "Product 8", "efc", 254, 1004));
SubProducts.push(new SubProduct(9, "Product 9", "mno", 134, 1005));
SubProducts.push(new SubProduct(10, "Product 10", "abc", 500, 1005));

SubProducts.push(new SubProduct(11, "Product 11", "abc", 999, 1006));
SubProducts.push(new SubProduct(12, "Product 12", "pqr", 1999, 1006));
SubProducts.push(new SubProduct(13, "Product 13", "xyz", 344, 1007));
SubProducts.push(new SubProduct(14, "Product 14", "mno", 800, 1007));

SubProducts.push(new SubProduct(15, "Product 15", "pqr", 999, 1008));
SubProducts.push(new SubProduct(16, "Product 16", "abc", 899, 1008));
SubProducts.push(new SubProduct(19, "Product 19", "xyz", 134, 1010));
SubProducts.push(new SubProduct(20, "Product 20", "fgh", 1599, 1010));

SubProducts.push(new SubProduct(21, "Product 21", "abc", 999, 1011));
SubProducts.push(new SubProduct(22, "Product 22", "pqr", 2354, 1011));

SubProducts.push(new SubProduct(29, "Product 29", "abc", 999, 1015));
SubProducts.push(new SubProduct(30, "Product 30", "pqr", 2354, 1015));
SubProducts.push(new SubProduct(31, "Product 31", "xyz", 865, 1016));
SubProducts.push(new SubProduct(52, "Product 32", "abc", 1234, 1016));

SubProducts.push(new SubProduct(39, "Product 39", "mno", 1243, 1020));
SubProducts.push(new SubProduct(40, "Product 40", "efc", 1999, 1020));

SubProducts.push(new SubProduct(41, "Product 41", "xyz", 865, 1021));
SubProducts.push(new SubProduct(42, "Product 42", "abc", 1234, 1021));

SubProducts.push(new SubProduct(47, "Product 47", "mno", 1243, 1024));
SubProducts.push(new SubProduct(48, "Product 48", "efc", 1999, 1024));
