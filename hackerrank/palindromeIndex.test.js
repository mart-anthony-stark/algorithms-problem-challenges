const palindromeIndex = require("./palindromeIndex");

test("Returns the index to be removed to make the string palindrome", () => {
  expect(palindromeIndex("aaab")).toBe(3);
  expect(palindromeIndex("baa")).toBe(0);
  expect(palindromeIndex("aaa")).toBe(-1);
});
