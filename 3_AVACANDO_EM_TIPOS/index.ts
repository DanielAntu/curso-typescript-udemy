// 1 - arrays
let numbers: number[] = [1, 2, 3];

numbers.push(4);

console.log(numbers[2]);

const nomes: string[] = ["Matheus", "João"];
console.log(nomes[0]);

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200];
nums.push(300);

console.log(nums);

console.log(nums[1]);

// 3 - any
const arr1: any = [1, "teste", true, [], { nome: "Matheus" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number) {
    console.log(a + b);
}

soma(4, 5);

// 5 - retorno de função
function greeting(name: string): string {
    return `Olá ${name}`;
}

console.log(greeting("Matheus"));

// 6 - função anonima
setTimeout(function () {
    const salary: number = 1000;
    //console.log(parseFloat(salary))
    // console.log(salary);
}, 2000);

// 7 - tipos de objeto
function passCoordinates(coord: { x: number; y: number }) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);

// 8 props opcionais
function showNumbers(a: number, b: number, c?: number) {
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
function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }

    return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Daniel", "Antunes"));
console.log(advancedGreeting("Daniel"));
