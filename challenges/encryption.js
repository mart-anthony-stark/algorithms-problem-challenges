const DICTIONARY =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

const encodeId = (num) => {
  const base = DICTIONARY.length;
  let encoded = "";

  if (num === 0) return DICTIONARY[0];

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }
  return reverseWord(encoded);
};

const reverseWord = (str) => {
  return str.split("").reduce((curr, ch) => (curr = ch + curr), "");
};

const decodeId = (id) => {
  const base = DICTIONARY.length;
  let decoded = 0;

  for (let i = 0; i < id.split("").length; i++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(i));
  }

  return decoded;
};
console.log(encodeId(246546144));
console.log(decodeId("qQD4S"));
