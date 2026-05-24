
console.log("Comparison Operations in JavaScript");

let p = 15;
let q = 10;

console.log("Values of p and q:", p, q);

console.log("Equal to (p == q): " + (p == q));
console.log("Not equal to (p != q): " + (p != q));
console.log("Strict equal to (p === q): " + (p === q));
console.log("Strict not equal to (p !== q): " + (p !== q));

console.log("Greater than (p > q): " + (p > q));
console.log("Less than (p < q): " + (p < q));
console.log("Greater than or equal to (p >= q): " + (p >= q));
console.log("Less than or equal to (p <= q): " + (p <= q));

console.log("Comparing values of different types:");
let strNum = "15";
console.log("p == strNum: " + (p == strNum));
console.log("p === strNum: " + (p === strNum));
console.log("p != strNum: " + (p != strNum));
console.log("p !== strNum: " + (p !== strNum));
console.log("p > strNum: " + (p > strNum));
console.log("p < strNum: " + (p < strNum));
console.log("p >= strNum: " + (p >= strNum));
console.log("p <= strNum: " + (p <= strNum));


let a = 5;
let b = 2;
let c = 5;

console.log("a =", a, "& b =", b, "& c =", c);

console.log("a", a, "== b", b, "=", a == b); //false
console.log("a", a, "== c", c, "=", a == c); //true

console.log("a", a, "=== b", b, "=", a === b); //false
console.log("a", a, "=== c", c, "=", a === c); //true

console.log("a", a, "!= b", b, "=", a != b); //true
console.log("a", a, "!= c", c, "=", a != c); //false

console.log("a", a, "!== b", b, "=", a !== b); //true
console.log("a", a, "!== c", c, "=", a !== c); //false

console.log("a", a, "< b", b, "=", a < b); //false
console.log("a", a, "< c", c, "=", a < c); //false

console.log("a", a, "<= b", b, "=", a <= b); //false
console.log("a", a, "<= c", c, "=", a <= c); //false

console.log("a", a, "> b", b, "=", a > b); //false
console.log("a", a, "> c", c, "=", a > c); //false

console.log("a", a, ">= b", b, "=", a >= b); //false
console.log("a", a, ">= c", c, "=", a >= c); //false
