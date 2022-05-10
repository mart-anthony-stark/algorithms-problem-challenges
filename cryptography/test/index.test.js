const caesarShift = require("../caesarShift");

// test("Encrypts and decrypts caesar shift algorithm", () => {
//   // test.todo("Encrypting data");
//   expect(
//     caesarShift("id:EMP42,name:John Doe,email:johndoe@gmail.com", 27)
//   ).toBe("je:FNQ42,obnf:Kpio Epf,fnbjm:kpioepf@hnbjm.dpn");
// });

describe("Encrypts and decrypts caesar shift algorithm", () => {
  // Encryption
  it.todo("Should encrypt data");

  // Decription
  it.todo("Should decrypt data");
});

describe("Encrypts and decrypts caesar shift algorithm", () => {
  expect(
    caesarShift("id:EMP42,name:John Doe,email:johndoe@gmail.com", 27)
  ).toBe("je:FNQ42,obnf:Kpio Epf,fnbjm:kpioepf@hnbjm.dpn");
  expect(
    caesarShift("je:FNQ42,obnf:Kpio Epf,fnbjm:kpioepf@hnbjm.dpn", -27)
  ).toBe("id:EMP42,name:John Doe,email:johndoe@gmail.com");
});
