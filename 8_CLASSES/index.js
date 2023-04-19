"use strict";
// 1 - campos em classes
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "Matheus";
// matheus.job = 'programmer'
console.log(matheus);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
// 3 - campo redonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca.wheels);
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class killerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new killerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger");
    }
}
const jimy = new Dwarf("jimmy");
console.log(jimy.name);
jimy.greeting();
console.log(jimy);
// 6 - O this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("volvo", 400);
volvo.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const danielAntunes = new Person("Daniel", "Antunes");
console.log(danielAntunes.name);
console.log(danielAntunes.fullName);
// 8 - setter
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("x inserindo com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y inserindo com sucesso");
    }
    get getCoords() {
        return `X ${this.x} e Y: ${this.y}`;
    }
}
const mycords = new Coords();
mycords.fillx = 15;
mycords.filly = 0;
console.log(mycords);
console.log(mycords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
// 10 - override de métodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
