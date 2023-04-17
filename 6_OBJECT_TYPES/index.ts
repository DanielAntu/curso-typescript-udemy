// 1 - tipo de objeto para função com interface
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProductsDetails(products: Product) {
    console.log(
        `O nome do produto é ${products.name} e seu preço é R$${products.price}`
    );
    if (products.isAvailable) {
        console.log("O produto está disponivel");
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};

showProductsDetails(shirt);
showProductsDetails({ name: "Tenis", price: 129.9, isAvailable: false });

// 2 - propriedade opcional em interface
interface User {
    email: string;
    role?: string;
}

function showUserDetails(user: User) {
    console.log(`O usuario tem o email: ${user.email}`);

    if (user.role) {
        console.log(`A funçao do usuario é: ${user.role}`);
    }
}

const u1: User = { email: "teste@teste.com", role: "admin" };
const u2: User = { email: "joao@gmail.com" };

showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly
interface Car {
    brand: string;
    readonly wheels: number;
}

const fusca: Car = {
    brand: "VW",
    wheels: 4,
};

console.log(fusca);

//fusca.wheels(5)

// 4 - index signature
interface CoordObject {
    [index: string]: number;
}

let coords: CoordObject = {
    x: 10,
};

coords.y = 15;

console.log(coords);

// 5 - extending interface
interface Human {
    name: string;
    age: number;
}

interface SuperHuman extends Human {
    superPowers: string[];
}

const matheus: Human = {
    name: "Matheus",
    age: 30,
};

console.log(matheus);

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);

console.log(goku.superPowers[1]);

// 6 - intersection types
interface Character {
    name: string;
}

interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};

console.log(arnold);
console.log(arnold.caliber);

// 7 - ReadOnly Array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

console.log(myArray);

myArray.forEach((item) => {
    console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});

console.log(myArray);

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Matheus", 30];

console.log(anotherUser[0]);

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    //numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1, 2]);
