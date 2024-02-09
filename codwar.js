// Challenge => Credit Card Mask :

function maskify(Num) {
  if (typeof Num === "number") {
    // Convert  number to string
    Num = Num.toString();
  }

  // cheking if number more than 4 char
  if (Num.length > 4) {
    // slice the 4 last char
    let lastFourCharacters = Num.slice(-4);

    let maskedPart = "";
    for (let i = 0; i < Num.length - 4; i++) {
      maskedPart += "#";
    }

    return maskedPart + lastFourCharacters;
  } else {
    // return the same num if is les than o equal 4 char
    return Num;
  }
}

// Test
let CardNumber = "1234567890123456";
let shortNumber = "123";
let number = 1236664;

console.log(maskify(CardNumber));
console.log(maskify(shortNumber));
console.log(maskify(number));
