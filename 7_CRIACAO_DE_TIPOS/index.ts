// 1- Generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando generic"));

// 2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`;
}

const myObject = { name: "Porta", cor: "Branca" };

console.log(showProductName(myObject));

// 3 - generics com interface
interface MyObject<T, U, Q> {
    name: string;
    wheels: T;
    engine: U;
    color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul",
};

console.log(myCar);
console.log(myPen);

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, Key: K) {
    return `A chave ${Key.toString()} esta presente no objeto e tem o valor de ${
        obj[Key]
    }`;
}

const server = {
    hd: "2TB",
    ram: "32GB",
};

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));

// 5 - keyof type operator
type Character = { name: string; age: number; hasDriveLicence: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`;
}

const myChar: Character = {
    name: "Matheus",
    age: 30,
    hasDriveLicence: true,
};

console.log(showCharName(myChar, "name"));

// 6 - typeof type operator
const userName: string = "Matheus";

const userName2: typeof userName = "João";

// 7 -indexed access type
type Truck = { km: number; kg: number; description: string };

type km = Truck["km"];

const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};

function showKm(km: km) {
    console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);

// 8 - conditional expressions type
interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

const somaVar: myType = 5;
// const someVar2: myType = 'teste'

// 9 - Template Literals Type
type testeA = "text";

type CustomType = `some ${testeA}`;

const testing: CustomType = "some text";
// const testing2: CustomType = 'some text 2'
