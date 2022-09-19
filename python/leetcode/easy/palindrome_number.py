'''
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
'''
class Solution(object):
  def isPalindromeNumber(self, x):
    """
    :type x: int
    :rtype: bool
    """
    return str(x) == str(x)[::-1]