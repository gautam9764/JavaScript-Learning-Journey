

console.log("array find");

let fruits = ["mango", "litchi", "guava", "mango", "papita"];

let test = fruits.find(function (item) {
    return item === "mango";
});
console.log(test);