
console.log("logical Operations in JavaScript");

let a = 5;
let b = 2;
console.log("a =", a, "& b =", b);

let t = a > b; //true
let f = a < b; //false
console.log("t = a > b", t);
console.log("f = a < b", f);

console.log("t && t", t && t);
console.log("t && f", t && f);
console.log("f && t", f && t);
console.log("f && f", f && f);

console.log("t || t", t || t);
console.log("t || f", t || f);
console.log("f || t", f || t);
console.log("f || f", f || f);

console.log(t);
console.log(f);
console.log("!(t)", !t);
console.log("!(f)", !f);