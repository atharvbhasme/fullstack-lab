function decimalToBinary(number) {
  if (number === 0) return "0";
  let binary = "";
  while (number > 0) {
    binary = (number & 1) + binary;
    number >>= 1;
  }
  return binary;
}

console.log(decimalToBinary(205));
