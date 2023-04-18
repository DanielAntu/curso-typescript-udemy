"use strict";
// 1- Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObject = { name: "Porta", cor: "Branca" };
console.log(showProductName(myObject));
const myCar = { name: "fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, Key) {
    return `A chave ${Key.toString()} esta presente no objeto e tem o valor de ${obj[Key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriveLicence: true,
};
console.log(showCharName(myChar, "name"));
// 6 - typeof type operator
const userName = "Matheus";
const userName2 = "João";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const somaVar = 5;
const testing = "some text";
// const testing2: CustomType = 'some text 2'
