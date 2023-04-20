// 1 - campos em classes

class User {
    name!: string;
    age!: number;
}

const matheus = new User();

console.log(matheus);

matheus.name = "Matheus";
// matheus.job = 'programmer'

console.log(matheus);

// 2 - constructor
class NewUser {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new NewUser("João", 22);

console.log(joao);

// 3 - campo redonly
class Car {
    name;
    readonly wheels = 4;

    constructor(name: string) {
        this.name = name;
    }
}

const fusca = new Car("Fusca");

console.log(fusca.wheels);

// 4 - Herança e super
class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine("Trator");

class killerMachine extends Machine {
    guns;

    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns;
    }
}

const destroyer = new killerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);

// 5 - métodos
class Dwarf {
    name;

    constructor(name: string) {
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
    model;
    hp;

    constructor(model: string, hp: number) {
        this.model = model;
        this.hp = hp;
    }

    showDetails() {
        console.log(
            `Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`
        );
    }
}

const volvo = new Truck("volvo", 400);

volvo.showDetails();

// 7 - getters
class Person {
    name;
    surname;

    constructor(name: string, surname: string) {
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
    x!: number;
    y!: number;

    set fillx(x: number) {
        if (x === 0) {
            return;
        }

        this.x = x;
        console.log("x inserindo com sucesso");
    }

    set filly(y: number) {
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

// 9 - implements
interface showTitle {
    itemTitle(): string;
}

class blogPost implements showTitle {
    title;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
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
    someMethod(): void {
        console.log("Testando outra coisa");
    }
}

const myObject = new Nova();

myObject.someMethod();

// 11 - public
class C {
    public x = 10;
}

class D extends C {}

const cInstance = new C();

console.log(cInstance.x);

const dInstance = new D();

console.log(dInstance.x);

// 12 - protected
class E {
    protected x = 10;

    protected protectedMethod() {
        console.log("Este metodo é protegido");
    }
}

class F extends E {
    showX() {
        console.log("X: " + this.x);
    }

    showProtectedMethod() {
        this.protectedMethod();
    }
}

const finstance = new F();

finstance.showX();
finstance.showProtectedMethod();

// console.log(finstance.x)

// 13 - private
class Private {
    private name = "Private";

    showName() {
        return this.name;
    }
}

const pObject = new Private();

// console.log(pObject.name)

console.log(pObject.showName());

// 14 - static members
class StaticMembers {
    static prop = "Teste static";

    static staticMember() {
        console.log("Este é um método estático");
    }
}

console.log(StaticMembers.prop);
StaticMembers.staticMember();

// 15 - generic class
class Item<T, U> {
    first;
    second;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    get showFirst() {
        return `O first é: ${this.first}`;
    }
}

const newItem = new Item("caixa", "surpresa");

console.log(newItem);

console.log(newItem.showFirst);

// 16 - Parameters properties
class ParameterProperties {
    constructor(
        public name: string,
        private qty: number,
        private price: number
    ) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    get showQty() {
        return `Quantidade total: ${this.qty}`;
    }

    get showPrice() {
        return `Preço do produto: ${this.price}`;
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);

// 17 - class expressions
const myClass = class<T> {
    name;

    constructor(name: T) {
        this.name = name;
    }
};

const pessoa = new myClass("Jones");

console.log(pessoa);

console.log(pessoa.name);

// 18 - abstract class
abstract class AbstractClass {
    abstract showName(): void;
}

// const newObj = new AbstractClass()

class AbstractExample extends AbstractClass {
    name;

    constructor(name: string) {
        super();
        this.name = name;
    }

    showName(): void {
        console.log(`O nome é: ${this.name}`);
    }
}

const newAbstractObject = new AbstractExample("Josias");

newAbstractObject.showName();

// 19 - relações entre classes

class Dog {
    name!: string;
}

class Cat {
    name!: string;
}

const doguinho: Dog = new Cat();
console.log(doguinho);
