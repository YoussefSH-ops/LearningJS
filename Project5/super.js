class Animal{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
}
class Crocodile extends Animal{

    constructor(name, age, speed){
        super(name, age)
        this.speed = speed;
    }
}
class Michael extends Animal{

    constructor(name, age, runSpeed) {
        super(name, age)
        this.speed = runSpeed
    }
}
const michael = new Michael("michz", 12, 24)
