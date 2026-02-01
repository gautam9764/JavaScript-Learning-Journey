
console.log("Bitwise Operations in JavaScript");

let m = 6;  // In binary:  110
let n = 3;  // In binary:  011
console.log("Values of m and n:", m , n);

console.log("Bitwise AND (m & n): " + (m & n)); // 2 in binary: 010
console.log("Bitwise OR (m | n): " + (m | n)); // 7 in binary: 111
console.log("Bitwise XOR (m ^ n): " + (m ^ n));// 5 in binary: 101
console.log("Bitwise NOT (~m): " + (~m));// -7 in binary: ...11111001 (two's complement)
console.log("Left Shift (m << 1): " + (m << 1));// 12 in binary: 1100
console.log("Right Shift (m >> 1): " + (m >> 1));// 3 in binary: 011