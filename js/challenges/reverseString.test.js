const reverse = require("./reverseString");

test("Properly reverses the word", () => {
  expect(reverse("abc")).toBe("cba");
  expect(reverse("123")).toBe("321");
});
