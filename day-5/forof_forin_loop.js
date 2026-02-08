

console.log("for of loop AND for in loop");

let str = "Manas Kumar Lal";
for (let ch of str) {
    console.log(ch);
}

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (let ch in str) {
    console.log(ch);
}