{
  // Ternary Operators
  let a = 5;
  let b = 2;
  console.log("a =", a, "& b =", b);

  let max = a > b ? a : b;
  console.log("The maximum value between a and b is:", max);

  a < b
    ? console.log("a is greater than b")
    : console.log("a is not greater than b");
  a > b
    ? console.log("a is greater than b")
    : console.log("a is not greater than b");
}

{
  // if Statement
  console.log("if Statement");
  let age = 33;

  if (age <= 33) {
    console.log("Fail");
  }
}

{
  // if-else Statement
  console.log("if-else Statement");
  let age = 34;

  if (age <= 33) {
    console.log("Fail");
  } else {
    console.log("Pass");
  }
}

{
  // Else-If Ladder
  console.log("Else-If Ladder");
  let age = 18;

  if (age < 18) {
    console.log("junior");
  } else if (age > 18) {
    console.log("senior");
  } else {
    console.log("middle");
  }


  let score = 85; // Change this value to test other scores
  let grade;

  if (score >= 80 && score <= 100) {
    grade = "A";
  } else if (score >= 70 && score <= 79) {
    grade = "B";
  } else if (score >= 60 && score <= 69) {
    grade = "C";
  } else if (score >= 50 && score <= 59) {
    grade = "D";
  } else if (score >= 0 && score <= 49) {
    grade = "F";
  } else {
    grade = "Invalid score";
  }

  console.log("Score:", score);
  console.log("Grade:", grade);
}

{
  let age = 6;

  if (age >= 18) {
    console.log("you can drive");
  } else {
    console.log("you can't drive");
  }

  if (age >= 18) console.log("you can drive");
  else console.log("you can't drive");

  let result = age >= 18 ? "you can drive" : "you can't drive";
  console.log(result);
}

{
  // Nested if Statement
  console.log("Nested if Statement");
  let a = 0;

  if (a > 0) {
    if (a % 2 == 0) {
      console.log("a is a positive even number");
    } else {
      console.log("a is a positive odd number");
    }
  } else {
    console.log("a is not a positive number");
  }
}

{
  // switch Statement
  console.log("switch case");
  let day = 7;

  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
  }
}
