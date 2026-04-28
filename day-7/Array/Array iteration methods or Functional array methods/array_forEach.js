

console.log("array forEach");

let arr = [1, 2, 5, 9, 10];

arr.forEach((elem, index) => {
    arr[index] = elem * 2;
});