console.log("if Statement");
let age = 33;

if (age <= 33) {
    console.log("Fail");
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