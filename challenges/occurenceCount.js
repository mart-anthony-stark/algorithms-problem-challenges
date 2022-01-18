const occurence = (originalStr, searchStr) => {
  let count = 0;
  let pos = originalStr.indexOf(searchStr);
  while (pos !== -1) {
    count++;
    pos = originalStr.indexOf(searchStr, pos + 1);
  }
  return count;
};
console.log(occurence("He's my king from this day until his last day", "day"));
