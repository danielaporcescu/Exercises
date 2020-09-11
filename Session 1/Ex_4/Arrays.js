// Arrays
let a = [4, 2, 1198, "Hi"];
console.log(a.length);
console.log(a[2]);

let b = [17, ...a]; // Spread operator
console.log(b);

let [x, y, ...z] = a; // Deconstruction
console.log(x, y, z);

console.log("\nExercises: ");
let ar = [1, 2, 3, 5, 8];

// a)
console.log("a[5] is: " + Number(ar[5]));

// b)

for (let i of ar) {
  var vals = vals + " " + ar[i];
  var sum = sum + ar[i];
}
console.log("One way of printing: " + vals);

//another option of printing
var br = [...ar];
console.log("Another way of printing: " + br);

// c)
console.log("The sum is: " + sum);

// d)
function ArraySum(n, arr) {
  var arr = [n];

  let sum = 0;
  for (let i of arr) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("Sum function: " + ArraySum(2, [1, 2]));

// e)
