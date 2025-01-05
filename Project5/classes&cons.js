/**
 * What is a constructor?
 A constructor is a special function inside a class that runs when you create a new object from that class. 
 It helps initialize (set up) the object with specific values. In this code, 
 the constructor sets the name and price for a product.
 */


class Product{ 
    constructor(name, price) { // Class Definition: The Product class is created with a special function called a constructor.
        this.name = name;
        this.price = price;

    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const boots = new Product("AirJordan", 20);
const tshirt = new Product("Shirt", 12.99); // Object Creation: product1 is an object created from the Product class, with "Shirt" as its name and 12.99 as its price.


boots.displayProduct();
tshirt.displayProduct(); // Method: The class has a method called displayProduct(), which prints the product’s name and price to the console.

const total = boots.calculateTotal(salesTax)
console.log(`Total price (with tax): $${total}`)

// super = keyword is used in classes to call the constructer or
//        access the properties and methods of a parent (superclasses)
//        this = this object
//        super = the parent

