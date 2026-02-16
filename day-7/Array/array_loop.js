
console.log("array loop");
let arr = [1, 3, 5, 100, 99];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);

    for (let elem of arr) {
        console.log(elem);
    }

    for (let ind in arr) {
        console.log(ind);
    }
}