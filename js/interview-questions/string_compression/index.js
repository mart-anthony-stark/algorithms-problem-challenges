// Create a basic string compression method using the counts of repeated characters

// Input:  aaaabbbbcccccddddeeee
// The compressed string along with the counts of repeated characters is:
// Output: a4b4c5d4e4
const compress = (str) => {
  let compressedStr = "";
  let count = "";
  for (let i = 1; i < str.length - 1; i++) {
    console.log(str.charAt(i));
    if (str.charAt(i) == str.charAt(i - 1)) {
      count++;
    } else {
      compressedStr += str.charAt(i - 1);
      compressedStr += count;
      count = 1;
    }
  }
  //Count the last character of the string
  if (str.length > 1) {
    // Compare last two characters of the string
    if (str.charAt(str.length - 1) == str.charAt(str.length - 2)) {
      count++;
    } else {
      compressedStr += str.charAt(str.length - 2);
      compressedStr += count;
    }
    compressedStr += str.charAt(str.length - 1);
    compressedStr += count;
  }

  console.log({ compressedStr });
};
compress("aaaabbbbcccccddddeeee");
