const occurence = require("./occurenceCount");

test("Properly counts the occurence of a string", () => {
  expect(
    occurence("He's my king from this day until his last day", "day")
  ).toBe(2);
});
