// default parameter

console.log("default parameter");
  function greet(name = 2 + 3 + 5 - 2) {
    console.log(name);
  }

  greet("app");
  // output: app

  greet();
  // default value = 8
  // output: 8