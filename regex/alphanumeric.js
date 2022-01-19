const alphaNumeric = (str) => {
  const reg = /^[a-z0-9]+$/i;
  return reg.test(str);
};
module.exports = alphaNumeric