const fib = (n) => {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
module.exports = fib;
