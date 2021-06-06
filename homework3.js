//1. 
let sum = +prompt("Enter num");
let result;
result = sum % 50;

switch (true) {
  case result < 25:
    console.log(sum - result); //
    break;

  case result > 25:
    console.log(sum - result + 50); //
    break;

  case result == 25:
    console.log(sum + result);
    break;

  default:
    console.log("Error");
    break;
}
//2
let a = +prompt("Enter num");
let b = +prompt("Enter num");
let c = +prompt("Enter num");

if (a > 0 && b > 0 && c > 0) {
  console.log("The sign is +");
} else if (a < 0 && b < 0 && c < 0) {
  console.log("The sign is -");
} else if (a > 0 && b < 0 && c < 0) {
  console.log("The sign is +");
} else if (a < 0 && b > 0 && c < 0) {
  console.log("The sign is +");
} else if (a < 0 && b < 0 && c > 0) {
  console.log("The sign is +");
} else if (a == 0 || b == 0 || c == 0) {
  console.log("unsigned");
} else {
  console.log("The sign is -");
}
//3

let digit = +prompt("Enter a digit number");
let num = +prompt("Enter number");

if (num == digit) {
  console.log("Yes");
}

while (num != 0) {
  if (num % 10 == digit) {
    console.log("Yes");
    break;
  }
  num = Math.floor(num / 10);
}
if (num == 0) {
  console.log("No");
}
// 4

let num = +prompt("Enter number");

let max = 0;
let min = num % 10;

while (num > 0) {
  let digit = num % 10;
  max = Math.max(digit, max);
  min = Math.min(digit, min);
  num = Math.floor(num / 10);
}
console.log(max - min);
//5

let num = +prompt("Enter number");
var x = 1;

for (i = 2; i < num; i++) {
  if (num % i == 0) {
    x = 0;
    break;
  }
}
if (x == 1) {
  console.log("Yes");
} else {
  console.log("No");
}