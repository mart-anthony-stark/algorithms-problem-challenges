const alphaNumeric = (str) => {
  const reg = /[a-zA-Z0-9]/;
  return reg.test(str);
};
console.log(alphaNumeric("asdasddsa"));
