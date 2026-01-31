
// Operators in JavaScript
{
  // Arithmetic Operators
  console.log("Arithmetic Operators");
  let a = 5;
  let b = 2;
  console.log("a =", a, "& b =", b);
  console.log("a + b =", a + b);
  console.log("a - b =", a - b);
  console.log("a * b =", a * b);
  console.log("a / b =", a / b);
  console.log("a % b =", a % b);
  console.log("b % a =", b % a);
  console.log("a ** b =", a ** b);
}

{
  // unary Operators
  console.log("unary Operators");
  let a = 5;
  let b = 5;
  let c = 5;
  let d = 5;
  console.log("a =", a, "& b =", b, "& c =", c, "& d =", d);
  console.log("a++ =", a++);
  console.log("a++ =", a++);
  console.log("++b =", ++b);
  console.log("c-- =", c--);
  console.log("c-- =", c--);
  console.log("--d =", --d);
}

{
  // Assignment Operators
  console.log("Assignment Operators");
  let a = 5;
  let b = 2;
  console.log("a =", a, "& b =", b);
  console.log("a += b =", (a += b));
  console.log("a -= b =", (a -= b));
  console.log("a *= b =", (a *= b));
  console.log("a /= b =", (a /= b));
  console.log("a %= b =", (a %= b));
  console.log("b %= a =", (b %= a));
  console.log("a **= b =", (a **= b));
}

{
  // Comparison Operators
  console.log("Comparison Operators");
  let a = 5;
  let b = 2;
  let c = 5;
  console.log("a =", a, "& b =", b, "& c =", c);
  console.log("a", a, "== b", b, "=", a == b); //f
  console.log("a", a, "== c", c, "=", a == c); //t

  console.log("a", a, "=== b", b, "=", a === b); //f
  console.log("a", a, "=== c", c, "=", a === c); //t

  console.log("a", a, "!= b", b, "=", a != b); //t
  console.log("a", a, "!= c", c, "=", a != c); //f

  console.log("a", a, "!== b", b, "=", a !== b); //t
  console.log("a", a, "!== c", c, "=", a !== c); //f

  console.log("a", a, "< b", b, "=", a < b); //f
  console.log("a", a, "< c", c, "=", a < c); //f

  console.log("a", a, "<= b", b, "=", a <= b); //f
  console.log("a", a, "<= c", c, "=", a <= c); //t

  console.log("a", a, "> b", b, "=", a > b); //t
  console.log("a", a, "> c", c, "=", a > c); //f

  console.log("a", a, ">= b", b, "=", a >= b); //t
  console.log("a", a, ">= c", c, "=", a >= c); //t
}

{
  // Logical Operators
  console.log("Logical Operators");
  let a = 5;
  let b = 2;
  console.log("a =", a, "& b =", b);

  let t = a > b; //t
  let f = a < b; //f
  console.log("t = a > b", t);
  console.log("f = a < b", f);

  console.log("t && t", t && t);
  console.log("t && f", t && f);
  console.log("f && t", f && t);
  console.log("f && f", f && f);

  console.log("t || t", t || t);
  console.log("t || f", t || f);
  console.log("f || t", f || t);
  console.log("f || f", f || f);

  console.log(t);
  console.log(f);
  console.log("!(t)", !t);
  console.log("!(f)", !f);
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
  // else-if Statement
  console.log("else-if Statement");
  let age =  18
  
  if(age < 18){
    console.log("junior");
  }else if (age > 18){
    console.log("senior");
  }else{
    console.log("middle");
  }
}



{
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
