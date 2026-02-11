//Type 4. With parameter list & with return

console.log("Type 4. With parameter list & with return");
function greet(name) {
    console.log(1); // output: 1
    console.log(2); // output: 2
    return "hello bro" + " " + name;
    // return પછીનું code execute થતું નથી
    console.log("something something"); // ❌ never runs
}

let a = greet("Lambda");
console.log(a); // output: hello bro Lambda