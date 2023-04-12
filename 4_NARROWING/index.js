"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("imposivel realizar a soma.");
    }
}
sum("4", "59");
sum(12, 42.3);
sum("5", 3);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([10, 2, 3], "multiply");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const Jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(Jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}. Deseja ver os dados do sistema`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(Jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDogDetails(turca);
showDogDetails(bob);
function ReviewMensagem(review) {
    if (!review) {
        console.log("Você não avaliou o produto.");
        return;
    }
    console.log(`A nota que você deu foi ${review} obrigado.`);
}
ReviewMensagem(false);
ReviewMensagem(4);
ReviewMensagem(3);
