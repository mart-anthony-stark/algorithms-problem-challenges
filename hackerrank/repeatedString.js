function repeatedString(s, n) {
  // Write your code here
  const min = 1;
  const maxs = 100;
  const maxn = 1000000000000;
  let as = s.split("").filter((i) => i === "a").length;
  if (
    typeof s === "string" &&
    s.length >= min &&
    s.length <= maxs &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= maxn
  )
    as =
      parseInt(n / s.length, 0) * as +
      s
        .slice(0, n % s.length)
        .split("")
        .filter((i) => i === "a").length;

  return as;
}
module.exports = repeatedString