
console.log("for in loop");

// Object example
const person = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
};

for (let key in person) {
    console.log(key, person[key]);
}

// Array example (indexes)
const colors = ["red", "green", "blue"];

for (let index in colors) {
    console.log(index, colors[index]);
}