// console hamara print karta hai output ko screen pe
// console.log("hello")

// ye hmara single line comment hai aljdsflk as;ld lkds jlksajd flkajdsflkjasdlkfj lakdsj f;lkajdslfkj sadlkjflksadj flkjdsa lfk jlsakdjflk jdsa

/*
ye hamara
multiple line
comment hai
*/

let age;
age = 24;
console.log(age);

let name1 = "Manas Kumar Lal";
fulname = "ram";
console.log(fulname);

let alpha = "lakjdslkfj sadlfkj s;dlf jaf";
console.log(alpha);

// Three Stages of a Variable:
// 1. Declaration
// 2. Initialization
// 3. Use

// let a; //Declaration
// let b; // Declaration
// let c; // Declaration

// a = 10; // Initialization
// b = 20; // Initialization
// c = 30; // Initialization

// let a = 10; // Declaration + Initialization
// let b = 20; // Declaration + Initialization
// let c = 30; // Declaration + Initialization

// let a,b,c; // Declaration
// a = 10;    // Initialization
// b = 20;    // Initialization
// c = 30;    // Initialization

// let a = 10;  // Declaration + Initialization
// let b;       // Declaration
// let c;       // Declaration

// console.log(a,b,c)   // Use
// console.log(a)       // Use
// console.log(b)       // Use
// console.log(c)       // Use

// let a = 1;
// let a = 10;

let a1 = "2" + 2;
let a2 = "2" - 2;
console.log(a1);
console.log(a2);
console.log(a1, typeof a1);
console.log(a2, typeof a2);

{
  let age = 1;
  let name = "manas";
  console.log(age);
  console.log(name);
}

console.log(age);
console.log("hello");

const pi = 3.14;

console.log(pi)



let fulname1 = "halwa";
let Name = "gazar ka halwa";
console.log(fulname1);
console.log(Name);

let Gautam;
let Gautam1;
let Gautam_;
let Gautam$;
let $Gautam;

let Gohil_Gautam;

let price1 = 499;
let price2 = 299;

let totalPrice = price1 + price2;
console.log(totalPrice);

let name3 = prompt("Enter name");
let lastName = prompt("Enter last name");
let fullName = name3 + " " + lastName;
console.log(fullName);

let name5;
let name4 = null;
console.log(name4, typeof name5)
console.log(name4, typeof name4)

let number = BigInt(23432432);

console.log(number, typeof number)

let isLoggedIn = false;
console.log(isLoggedIn, typeof isLoggedIn)

// let str = "23";
// let num = Number(str);
// console.log(num, typeof num)

let num = Number(prompt("Enter a number"));
console.log(num, typeof num);

// var example
var x = 10;
var x = 20; // redeclare allowed
x = 30; // update allowed
console.log(x); // 30

// let example
let y = 10;
// let y = 20;     // ❌ redeclare not allowed in same scope
y = 25; // update allowed
console.log(y); // 25

// const example
const z = 50;
// z = 60;         // ❌ update not allowed
// const z = 70;   // ❌ redeclare not allowed
console.log(z); // 50

// Block scope example
{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1  (var is function scoped)
console.log(b); // ❌ error (block scoped)
console.log(c); // ❌ error (block scoped)

