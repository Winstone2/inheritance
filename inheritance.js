// Define Animal class in a separate file (animal.js)
class Animal {
    constructor(name) {
        this.name = name;
    }
}

module.exports = Animal;

// In your inheritance.js file
const Animal = require('./animal'); // Import the Animal class

class Bird extends Animal {
    constructor(name, wingspan) {
        super(name);
        this.wingspan = wingspan;
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }
}

const eagle = new Bird('Baldy', '6 feet');
eagle.fly();
