

console.log("array reduce");

let arr = [1, 2, 5, 9, 10];

let result = arr.reduce((acc, curr) => {
    return acc + curr;
}, 10);