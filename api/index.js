// a blueprint of things that we want to do
class Person{
    #firstName = "";
    constructor(firstName) {
        this.#firstName = firstName
    }
    walk() {
        console.log(`${this.#firstName} is walking.`);
    }
    dance() {
        console.log(`${this.#firstName} is dancing.`);
    }
}

const person1 = new Person("Keeno")
const person2 = new Person("Codi")
// console.log(person1.firstName);
person1.walk()
person2.dance()