"use strict";
function showProductsDetails(products) {
    console.log(`O nome do produto é ${products.name} e seu preço é R$${products.price}`);
    if (products.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductsDetails(shirt);
showProductsDetails({ name: "Tenis", price: 129.9, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A funçao do usuario é: ${user.role}`);
    }
}
const u1 = { email: "teste@teste.com", role: "admin" };
const u2 = { email: "joao@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: "Matheus",
    age: 30,
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superPowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - ReadOnly Array
let myArray = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Matheus", 30];
console.log(anotherUser[0]);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    //numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
