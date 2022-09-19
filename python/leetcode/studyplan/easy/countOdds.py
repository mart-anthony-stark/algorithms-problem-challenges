'''
Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
'''


class Solution:
    def countOdds(self, low: int, high: int) -> int:
        if low % 2 == 1 or high % 2 == 1:
            return (high-low) // 2 + 1
        else:
            return (high-low) // 2


'''
if left is odd or right is odd, then

return 1 + quotient of (right-left) / 2

otherwise,

return quotient of (right-left) / 2
'''
