'''
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
'''
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
          return ""
        
        i=0
        j=1
        while i <= len(strs[0]):
          while j < len(strs):
            if(strs[0][i] != strs[j][i]):
              return strs[0][0:i]
            j+=1
          i+=1
        return strs[0]