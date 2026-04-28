

console.log("array map");

let arr = [1, 2, 5, 9, 10];

let newArr = arr.map((elem) => {
    return elem * 2;
});
console.log("originial array : ", arr);
console.log(newArr);