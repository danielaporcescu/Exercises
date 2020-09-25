// Write curried versions of the following functions

function add(n, m) {
  return n + m;
}

//curried
const curriedAdd = (n) => (m) => n + m;

console.log(add(1,2));
const g = curriedAdd(1);
const h = curriedAdd(2);
console.log(g(1));
console.log(g(2));
console.log(h(1));

function greater(n, m) {
  return n > m;
}

//curried
const curriedCreater = (n) => (m) => n > m;

function get(attr, o) {
  return o[attr];
}

//curried 
const curriedGet = (attr) => (o) => o[attr];


function pipe(f, g) {
  return function (x) {
    let r = f(x);
    return g(r);
  };
}
