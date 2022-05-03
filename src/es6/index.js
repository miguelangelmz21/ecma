function newFunction(name, age, country) {
    var name = name || 'oscar1';
    var age = age || 31;
    var country = country || 'MX1';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'oscar2', age = 32, country = "MX2") {
    console.log(name, age, country);
};

newFunction();
newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'MX'
}

console.log(person.name, person.age);

let { name } = person;
console.log(name);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
// index.js:65 Uncaught TypeError: Assignment to constant variable.
//a = 'a';
console.log(a);

let name2 = 'oscar';
let age2 = 32;

//es5
let obj = { name2: name2, age2: age2 };
//es6
let obj2 = { name2, age2 };
console.log(obj2);

const names = [
  { name2: 'Oscar', age2: 32 },
  { name2: 'Yesica', age2: 27 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name2);
})

let listOfNames2 = names.map(item => console.log(item.name2));

const listOfNames3 = (name2, age2, country) => {
  //... 
}

const listOfNames4 = name2 => {
  //...
}

const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

const module = await import("./module.js");
module.hello();
//import { hello } from './module';

//hello();


function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
