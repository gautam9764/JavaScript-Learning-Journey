

console.log("array filter");

let arr = [1, 2, 5, 9, 10];

let filterArr = arr.filter((elem, index, arr) => {
    return elem > 5;
});