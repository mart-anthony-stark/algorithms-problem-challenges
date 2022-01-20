// Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be
// removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already
// a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.
const palindromeIndex = (s) => {
  function isPalindrome(s) {
    const r = s.split("").reduce((curr, ch) => (curr = ch + curr), "");
    return s === r;
  }
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      if (isPalindrome(s.slice(i, s.length - i - 1))) return s.length - i - 1;
      else if (isPalindrome(s.slice(i + 1, s.length - i))) return i;
      else return -1;
    }
  }
  return -1;
};
module.exports = palindromeIndex;
