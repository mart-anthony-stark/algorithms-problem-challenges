const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

let sum = 0;
const foo = (n) => {
  if (n <= 1) return sum;
  return foo(n - 1);
};
console.log(foo(5));

module.exports = fib;
