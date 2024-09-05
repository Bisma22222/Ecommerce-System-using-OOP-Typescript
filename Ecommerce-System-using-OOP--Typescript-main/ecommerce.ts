// Parent class
 class product{
    name:string;
    price:number;

    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    display(){
        console.log(`The product is ${this.name}`)
        console.log(`${this.name} price is ${this.price}`)
    }
}
// Child class1
class book extends product{
    author:string;
    pub_year:number;

    constructor(name:string,price:number,author:string,pub_year:number){
        super(name,price)
        this.author=author;
        this.pub_year=pub_year

    }
    displaybook_details(){
        console.log(`The price of ${this.name}  is ${this.price}`)
        console.log(`The author of ${this.name} is ${this.author}`)
        console.log(`${this.name} publish year is ${this.pub_year}`)
    }

}
// Child class2
class dresses extends product{
      material:string

    constructor(name:string,price:number,material:string){
        super(name,price)
        this.material=material

    }
    displaydress_details(){
        console.log(`The price of ${this.name} is ${this.price}`)
        console.log(`${this.name} material is ${this.material}`)

    }

}
// Child class3
class food extends product{
     item:number;
     category:string

  constructor(name:string,price:number,item:number,category:string){
      super(name,price)
      this.item=item;
      this.category=category;

  }
  displayfood_details(){
      console.log(`The price of ${this.name} is ${this.price}`)
      console.log(`Item = ${this.item}`)
      console.log(`The category of ${this.name} is ${this.category}`)
      }
}
  //Product Object
  let p1 = new product("TV",50000)
  console.log(p1)
  p1.display()
  // Book Object
  let b1 = new book("Peere kamil",800,"Umera Ahmed",2003)
  console.log(b1)
  b1.displaybook_details()
  // Dress Object
  let d1= new dresses("Frock",2000,"lawn")
  console.log(d1)
  d1.displaydress_details()
  // Food Object
  let f1 = new food("Broast",500,2,"Fast food")
  console.log(f1)
  f1.displayfood_details()