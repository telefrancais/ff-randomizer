class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        // calls the higher class' constructor.
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        // logical not operator.
        return !!this.major;
    }
    getDescription() {
        // calls higher class' getDescription.
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

const me = new Traveller('ryan duffield', 32, 'Toronto');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());