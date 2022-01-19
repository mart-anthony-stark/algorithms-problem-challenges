const isPalindrome = require("./isPalindrome");

test("Properly checks palindrome strings", () => {
  expect(isPalindrome("maam")).toBe(true);
  expect(isPalindrome("2002")).toBe(true);
  expect(isPalindrome("mart")).toBe(false);
  expect(isPalindrome("ABCDCBA")).toBe(true);
});
