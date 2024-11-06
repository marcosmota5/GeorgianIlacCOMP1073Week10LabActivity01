/* ################ CHALLENGE 1 ################ */
console.log('################ CHALLENGE 1 ################');

// Task 1: Constructor function for Car
function Car(make, speed) {
    // Set the make and speed
    this.make = make;
    this.speed = speed;
}

// Task 2: Accelerate method
Car.prototype.accelerate = function() {
    // Increase the speed by 10
    this.speed += 10;

    // Logs a message
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Task 3: Brake method
Car.prototype.brake = function() {
    // Decrease the speed by 5
    this.speed -= 5;

    // Logs a message
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Task 4: Create car objects and test
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Log the cars
console.log(car1);
console.log(car2);

// Test the class methods
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

/* ################ CHALLENGE 2 ################ */
console.log('\n################ CHALLENGE 2 ################');

// Task 1: Create CarCl class
class CarCl {
    constructor(make, speed) {
        // Set the make and speed
        this.make = make;
        this.speed = speed;
    }

    // Task 2: Accelerate method
    accelerate() {
        // Increases the speed by 10
        this.speed += 10;

        // Logs a message
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // Task 3: Brake method
    brake() {
        // Decreases the speed by 5
        this.speed -= 5;

        // Logs a message
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // Task 4: Getter for speed in mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // Task 5: Setter for speed in mi/h
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
  
// Create a car object and test
const car3 = new CarCl('Ford', 120);

// Log the car
console.log(car3);

// Test the methods
car3.accelerate();
car3.brake();
console.log(`Current speed in mi/h: ${car3.speedUS}`);
car3.speedUS = 75;
console.log(`Current speed in km/h after setting in mi/h: ${car3.speed}`);

/* ################ CHALLENGE 3 ################ */
console.log('\n################ CHALLENGE 2 ################');

// Task 1: Constructor function for EV as child of Car
function EV(make, speed, charge) {
    // Call the parent constructor
    Car.call(this, make, speed); 

    // Set the charge property
    this.charge = charge;
}
  
// Link the prototype and set constructor
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// Task 2: ChargeBattery method
EV.prototype.chargeBattery = function(chargeTo) {
    // Set the charge property
    this.charge = chargeTo;

    // Logs a message
    console.log(`${this.make} charged to ${this.charge}%`);
};

// Task 3: Accelerate method (overriding Car's accelerate)
EV.prototype.accelerate = function() {
    // Increases the speed by 20
    this.speed += 20;
    
    // Decreases the charge by 1
    this.charge -= 1;

    // Logs a message
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// Create an electric car object and test
const ev = new EV('Tesla', 120, 23);

// Log the car
console.log(car3);

// Test the methods
ev.accelerate();
ev.brake();
ev.chargeBattery(90);
ev.accelerate();