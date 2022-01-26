const generateString = (options) => {
  const length = options.length ? options.length : 5;
  let result = "";
  let characters = "";
  if (options.modes) {
    options.modes.forEach((m) => {
      if (m === "numbers") characters += "0123456789";
      if (m === "lowercase") characters += "abcdefghijklmnopqrstuvwxyz";
      if (m === "uppercase") characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    });
  }
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
console.log(generateString({ modes: ["numbers", "lowercase", "uppercase"] }));
