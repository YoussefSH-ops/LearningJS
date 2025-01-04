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


class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Grades: ${this.grade}`)

    }
    calculateAverage() {

        const sum = this.grade.reduce((a, b) => a + b, 0) 
        let numberOfGrades = this.grade.length
        let average = sum / numberOfGrades
        return average
    }
}

const student1 = new Student("John Doe", 16, [85, 90, 78, 92]);
const averageGrade = student1.calculateAverage();
student1.displayInfo();
console.log(`Average Grade: ${averageGrade}`);

/**
 // reduce((a, b) => a + b, 0)
 Accumulator (a): Keeps a running total (or result) as the function processes each element in the array.
Current Value (b): Represents the current element being processed in the array.
Initial Value (0): This is the starting value of the accumulator. Without it, the first element of the array is used as the initial value by default.

Step 1:
The reduce method starts by setting the accumulator (a) to 0 (the initial value) and the current value (b) to the first element of the array.

Step 2:
For each element in the array, it adds the current value (b) to the accumulator (a).

Step 3:
The result of each addition becomes the new value of the accumulator, and the process continues for every element in the array.

reduce loops through the array and accumulates the total sum by adding each element to the running total (a).
The initial value (0) ensures that the sum starts from zero.
In this example, the total sum is 345, and the average is calculated as 86.25.

 */