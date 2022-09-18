const repeatedString = require('./repeatedString')

test('', ()=>{
    expect(repeatedString("aba", 10)).toBe(7)
})