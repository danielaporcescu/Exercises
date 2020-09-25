// a) Create a function that takes a value, n,
// and returns a function that raises its argument to the power of n.

const functionOne = (n) => {
  const powerFunction = (a) => Math.pow(a, n);
  return powerFunction;
};

const func = functionOne(2);
console.log(func(3));

// b) Create a function that returns a function
// that gives subsequent elements of the Fibonacci sequence.

const fiboOutter = () => {
  const fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
};
