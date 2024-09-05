"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parent class
class product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    display() {
        console.log(`The product is ${this.name}`);
        console.log(`${this.name} price is ${this.price}`);
    }
}
// Child class1
class book extends product {
    author;
    pub_year;
    constructor(name, price, author, pub_year) {
        super(name, price);
        this.author = author;
        this.pub_year = pub_year;
    }
    displaybook_details() {
        console.log(`The price of ${this.name}  is ${this.price}`);
        console.log(`The author of ${this.name} is ${this.author}`);
        console.log(`${this.name} publish year is ${this.pub_year}`);
    }
}
// Child class2
class dresses extends product {
    material;
    constructor(name, price, material) {
        super(name, price);
        this.material = material;
    }
    displaydress_details() {
        console.log(`The price of ${this.name} is ${this.price}`);
        console.log(`${this.name} material is ${this.material}`);
    }
}
// Child class3
class food extends product {
    item;
    category;
    constructor(name, price, item, category) {
        super(name, price);
        this.item = item;
        this.category = category;
    }
    displayfood_details() {
        console.log(`The price of ${this.name} is ${this.price}`);
        console.log(`Item = ${this.item}`);
        console.log(`The category of ${this.name} is ${this.category}`);
    }
}
//Product Object
let p1 = new product("TV", 50000);
console.log(p1);
p1.display();
// Book Object
let b1 = new book("Peere kamil", 800, "Umera Ahmed", 2003);
console.log(b1);
b1.displaybook_details();
// Dress Object
let d1 = new dresses("Frock", 2000, "lawn");
console.log(d1);
d1.displaydress_details();
// Food Object
let f1 = new food("Broast", 500, 2, "Fast food");
console.log(f1);
f1.displayfood_details();
