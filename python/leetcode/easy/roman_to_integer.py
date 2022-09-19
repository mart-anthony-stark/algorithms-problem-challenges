'''
Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given a roman numeral, convert it to an integer.
'''


def romanToInt(s: str) -> int:
    roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500,
             'M': 1000, 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
    i = 0
    num = 0
    while i < len(s):
        if i+1 < len(s) and s[i:i+2] in roman:
            # print(s[i:i+2])
            num += roman[s[i:i+2]]
            i += 2
        else:
            # print(s[i])
            num += roman[s[i]]
            i += 1
    return num


print(romanToInt("CDXLIII"))
