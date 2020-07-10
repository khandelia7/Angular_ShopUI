export class Category {

    public constructor(public catId: number, public categoryName: String) {   
    }
}

export const Categories: Array<Category> = new Array<Category>();
Categories.push(new Category(101, "Fashion"));
Categories.push(new Category(102, "TV, Appliances & Electronics"));
Categories.push(new Category(103, "Home & Kitchen"));
Categories.push(new Category(104, "Car & Motorbike"));
Categories.push(new Category(105, "Sports, Fitness, Bags, Luggage"));
Categories.push(new Category(106, "Movies, Music & Video Games"));
Categories.push(new Category(107, "Daily essentials"));
Categories.push(new Category(108, "Safety & security"));

