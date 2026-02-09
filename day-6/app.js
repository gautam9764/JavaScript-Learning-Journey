{
  // normal function
  function alpha() {
    console.log("hello bhai"); // output: hello bhai
  }

  alpha(); // function call
}
// ------------------ Block 1 ------------------
{ //Type 1: No parameter, No return
  function alpha() {
    console.log("hello bhai");
  }

  alpha();
}

// ------------------ Block 2 ------------------
{  //Type 2. Without parameter list & with return
  function beta() {
    return "Mkl"; // value return કરે છે
  }

  let a = beta(); // a = "Mkl"
  console.log(a); // output: Mkl
}

// ------------------ Block 3 ------------------
{ //Type 3. With parameter list & without return
  function gamma(str) {
    console.log("hello bro", str);
    // output: hello bro manas
  }

  gamma("manas");
}

// ------------------ Block 4 ------------------
{ //Type 4. With parameter list & with return
  function greet(name) {
    console.log(1); // output: 1
    console.log(2); // output: 2
    return "hello bro" + " " + name;
    // return પછીનું code execute થતું નથી
    console.log("something something"); // ❌ never runs
  }

  let a = greet("Lambda");
  console.log(a); // output: hello bro Lambda
}

// ------------------ Block 5 ------------------
{ // default parameter
  function greet(name = 2 + 3 + 5 - 2) {
    console.log(name);
  }

  greet("app");
  // output: app

  greet();
  // default value = 8
  // output: 8
}

// ------------------ Block 6 ------------------
{
  // normal function
  function sum(a, b) {
    return a + b;
  }

  // function expression
  let sum2 = function (a, b) {
    return a + b;
  };

  let a = sum(2, 3);   // 5
  let b = sum2(2, 3); // 5
  console.log(a, b);  // output: 5 5

  // arrow function
  let alpha = () => {
    console.log("hello"); // output: hello
  };

  alpha();

  let alpha2 = () => {
    console.log("hello manas"); // output: hello manas
  };
  alpha2();

  // 3 seconds પછી alpha function call થશે
  setTimeout(alpha, 3000);
  // output after 3 sec: hello
}

// ------------------ Block 7 ------------------
{
  // IIFE - Immediately Invoked Function Expression
  (async function () {
    console.log("hello"); // output: hello
  })();
}

// ------------------ Block 8 ------------------
{
  function greet() {
    console.log("hello"); // output: hello
  }

  let greet2 = () => {
    console.log("hello 2"); // output: hello 2
  };

  greet();
  greet2();
}

// ------------------ Block 9 ------------------
{
  function generateUsername(fullName) {
    return "@" + fullName;
  }

  console.log(generateUsername("manas"));
  // output: @manas
}

// ------------------ Block 10 ------------------
{
  function generateInstructions(color) {
    if (color === "green") {
      return "go";
    } else if (color === "red") {
      return "stop";
    } else if (color === "yellow") {
      return "caution";
    } else {
      return "invalid color";
    }
  }

  let inst = generateInstructions("green");
  console.log(inst);
  // output: invalid color
}
