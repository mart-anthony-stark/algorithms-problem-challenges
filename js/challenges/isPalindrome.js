const isPalindrome = (str) => {
  const reversedString = str
    .split("")
    .reduce((curr, ch) => (curr = ch + curr), "");
  return reversedString === str;
};
module.exports = isPalindrome;
