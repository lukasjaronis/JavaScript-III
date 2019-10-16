/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding; the default, the window object in the browser. (global object)
* 2. Implicit Binding: when you're calling the function or invoking it (turning it on) the '.this' refers to the object or method left of the dot. 
* 3. New Binding: You can construct a new object where .this points to it. 
* 4. Explicit Binding: Refers to what you're PASSING INTO the argument. 'testing.call(test)'
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log(this);

// Principle 2
// code example for Implicit Binding

let car = {
    name: 'Mercedes',
    model: 'AMG S 65 Sedan',
    acceleration: 4.1,
    runMe: function() {
        console.log(`I drive a ${this.name} ${this.model} that accelerates in ${this.acceleration} seconds.`);
    }
}

car.runMe();

// Principle 3
// code example for New Binding

function TheGreats(name) {
    this.bark = " can bark!";
    this.name = name;
    this.speak = function() {
        console.log(this.name + this.bark);
    };
}

const kai = new TheGreats('Kai');
const eko = new TheGreats('Eko');

kai.speak();
eko.speak();


// Principle 4
// code example for Explicit Binding

function dog() {
    console.log(`${this.name} the ${this.breed}`);
}

const myDog = {
    name: 'Eko',
    breed: 'Rhodesian Ridgeback'
}

dog.call(myDog);