// a), b)
let i = 1;
var numbers = "";
let numbersSum = 0;
for (i; i < 11; i++) {
  numbers = numbers + i + " ";
  numbersSum = numbersSum + i;
}
console.log("Printed numbers are: ");
console.log(numbers);
console.log("Sum of numbers are: ");
console.log(numbersSum);

// c)
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(10));

// power
function powerF(m, n) {
  return Math.pow(m, n);
}
console.log(powerF(2, 3));

// advanced functions
function powFactorial(m, n) {
  if (n == null) {
    return m != 1 ? m * factorial(m - 1) : 1;
  } else {
    return Math.pow(m, n);
  }
}
console.log(powFactorial(2, 4));
//If the functioion takes just one argument, the fgacorial is calculated
console.log(powFactorial(4));
