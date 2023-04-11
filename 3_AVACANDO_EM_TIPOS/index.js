"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);
const nomes = ["Matheus", "João"];
console.log(nomes[0]);
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[1]);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Matheus" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Matheus"));
// 6 - função anonima
setTimeout(function () {
    const salary = 1000;
    //console.log(parseFloat(salary))
    // console.log(salary);
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// 8 props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(3)
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Daniel", "Antunes"));
console.log(advancedGreeting("Daniel"));
// union types
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true)
const arr2 = [1, "teste"];
console.log(arr2);
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return `A função do usuario é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y} z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
const somePerson = { name: "Daniel", age: 30 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// 16 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
//n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
