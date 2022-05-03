const button = document.getElementById("btn");
button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject("reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

console.log(window);
console.log(globalThis);

const fooo = 'asd' ?? 'default string';
console.log(fooo);

const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}

const string = "JavaScript es cool, con JavaScript podemos crear muchas cosas";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

class Message {
    // Con el # convertimos al método en privado
    //$show(val) {
    show(val) {
        console.log(val);
    };
    /*get #add(val){
        ...
    };
    */
}
const message = new Message();
message.show('Hola');

const promise4 = new Promise((resolve, reject) => reject("4"));
const promise5 = new Promise((resolve, reject) => resolve("5"));
const promise6 = new Promise((resolve, reject) => resolve("6"));

Promise.any([promise4, promise5, promise6])
    .then(response => console.log(response));


class AnyClass {
    constructor(element) {
        this.ref = new WeakRef
    }
    //{...}
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = true;
let isFalse3 = undefined;
console.log(isTrue3 ??= isFalse3);