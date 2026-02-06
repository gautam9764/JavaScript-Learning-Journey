//  for loop
{
    console.log("for loop");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
//  while loop
{
    console.log("while loop");
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
// do while loop
{
    console.log("do while loop");
    let i = 100;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}


{

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
}
// for...in (object keys / array indexes)
{
    console.log("for...in");
    // Object example
    const person = {
        name: "Rahul",
        age: 25,
        city: "Delhi",
    };

    for (let key in person) {
        console.log(key, person[key]);
    }
}
{
    // Array example (indexes)
    const colors = ["red", "green", "blue"];

    for (let index in colors) {
        console.log(index, colors[index]);
    }
}
// for...of (iterable values)
{
    console.log("for...of");
    // Array example (values)
    const fruits = ["apple", "banana", "mango"];

    for (let fruit of fruits) {
        console.log(fruit);
    }
}
{
    // String example
    const name = "JS";

    for (let ch of name) {
        console.log(ch);
    }

}
{
    console.log("break");
    for (let i = 0; i <= 5; i++) {
        console.log(i);
        if (i === 3) {
            break;
        }
        console.log(i);
    }
}
{
    console.log("continue");
    for (let i = 0; i <= 5; i++) {
        console.log(i);
        if (i === 2) {
            continue;
        }
        console.log(i);
    }
}

/*
Here are the **main loop names in JavaScript** 👇

### Basic loops

* **`for`** – runs a block a set number of times
* **`while`** – runs while a condition is true
* **`do...while`** – runs at least once, then checks the condition

### Collection / object loops

* **`for...in`** – loops over object keys (or array indexes)
* **`for...of`** – loops over iterable values (arrays, strings, etc.)

### Array-specific

* **`forEach()`** – executes a function for each array item

If you want, I can also show **examples**, **when to use which**, or a **comparison table**.

*/
