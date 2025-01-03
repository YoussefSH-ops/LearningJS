/**
Task:
Create a class called Book that represents a book in a library. The class should have the following features:

1 - A constructor that takes the following parameters:

title (string)
author (string)
price (number)

2 - A method called displayInfo that prints:
    Title: [title]
    Author: [author]
    Price: $[price]

3 - A method called applyDiscount that takes a discount percentage and returns the new price after applying the discount.

example : 
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99);

book1.displayInfo(); // Should print:
                     // Title: The Great Gatsby
                     // Author: F. Scott Fitzgerald
                     // Price: $15.99

const discountedPrice = book1.applyDiscount(10); // Apply a 10% discount
console.log(`Discounted price: $${discountedPrice}`); // Should print: Discounted price: $14.39

 */

class Book {
    constructor(title, author, price) {
        this.title = title
        this.author = author
        this.price = price
    }

    displayInfo() {
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Price: ${this.price}`)
    }

    applyDiscount(discountPersentage) {
        return this.price - (this.price / 10)
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99);
const discountedPrice = book1.applyDiscount(10);
book1.displayInfo();

console.log(`Price after discount : ${discountedPrice}`)

//--------------------------------------------------------------------------\\

/**
 * Task:
Create a class called Car that represents a car. The class should have the following features:

1 - A constructor that takes the following parameters:

brand (string)
model (string)
year (number)
price (number)

2 - A method called displayDetails that prints:
    Brand: [brand]
    Model: [model]
    Year: [year]
    Price: $[price]

3 - A method called calculateDepreciation that:

    Takes the current year as a parameter.
    Calculates the car’s depreciation assuming it loses 10% of its price every year.
    Returns the depreciated price.
 */

class Car {
    constructor(brand, model, year, price) {
        this.brand = brand
        this.model = model
        this.year = year
        this.price = price
    }

    displayDetails() {
        console.log(`Brand: ${this.brand}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
        console.log(`Price: ${this.price}`)
    }

    calculateDepreciation(currentYear) {
        const numberOfYears = currentYear - this.year
        const depreciatedPrice = this.price * Math.pow(0.9, numberOfYears);
        return depreciatedPrice;
    }


}
const myCar = new Car("Tesla", "Model S", 2020, 80000)
const depreciatedPrice = myCar.calculateDepreciation(2025)
myCar.displayDetails();
console.log(`Depreciated price in 2025: $${depreciatedPrice.toFixed(2)}`);