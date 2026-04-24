
console.log("array sort");

let arr = [10, 5, 1, 20];
let heroes = ["spiderman", "ironman", "hulk", "thor", "hawkeye", "wanda"];
heroes.sort();
console.log(heroes);

arr.sort((a, b) => {
    console.log(a, b);
    return b - a;
});
console.log(arr);