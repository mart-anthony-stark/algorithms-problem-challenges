const translateBinary = (str) => {
  return str
    .split(/ +/g)
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
};

const textToBinary = (str) => {
  const arr = str.split(/ /g).map((char) => char.charCodeAt(0));
  return arr.join(" ");
};

const text = translateBinary("01010001 01010010 00000000 01000011 01000010");
console.log(text);

const bin = textToBinary("Mart     Anthony   asd");
console.log(bin);
