const caesarShift = (str, amount) => {
  if (amount < 0) return caesarShift(str, amount + 26);

  // Make an output variable
  let output = "";

  for (let i = 0; i < str.length; i++) {
    //   ?char that will be append
    let c = str[i];

    // Alphabetic
    if (c.match(/[a-z]/i)) {
      // Get its code
      const code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  return output;
};

console.log(caesarShift("id:EMP42,name:John Doe,email:johndoe@gmail.com", 27));
console.log(caesarShift("je:FNQ42,obnf:Kpio Epf,fnbjm:kpioepf@hnbjm.dpn", -27));
