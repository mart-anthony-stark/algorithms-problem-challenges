const reverse = (str) => {
  return str.split("").reduce((curr, ch) => (curr = ch + curr), "");
};
module.exports = reverse;
