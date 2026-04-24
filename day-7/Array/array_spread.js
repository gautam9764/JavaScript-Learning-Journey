

console.log("array spread");

let arr1 = [2, 5, "mkl", 5];
let arr2 = [8, 10];
let arr3 = ["alpha", "beta"];

let newArr = [...arr1, ...arr2, ...arr3];
console.log(newArr);