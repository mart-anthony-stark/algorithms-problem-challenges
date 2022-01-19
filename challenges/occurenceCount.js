const occurence = (originalStr, searchStr) => {
  let count = 0;
  let pos = originalStr.indexOf(searchStr);
  while (pos !== -1) {
    count++;
    pos = originalStr.indexOf(searchStr, pos + 1);
  }
  return count;
};
module.exports = occurence;
