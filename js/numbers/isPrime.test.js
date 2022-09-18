const isPrime = require("./isPrime");

test("Properly checks prime numbers", () => {
  expect(isPrime(11)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(1)).toBe(false);
});
