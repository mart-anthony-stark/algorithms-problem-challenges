const alphaNumeric = require('./alphanumeric')

test("Properly checks if string is only alphanumeric", () => {
    expect(alphaNumeric("abc")).toBe(true)
    expect(alphaNumeric("cba")).toBe(true)
    expect(alphaNumeric("123")).toBe(true)
    expect(alphaNumeric("abc$")).toBe(false)
    expect(alphaNumeric("@bc")).toBe(false)
    expect(alphaNumeric("a^c")).toBe(false)
})