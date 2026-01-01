function convertBinaryToDecimal(num) {
  let decimal = 0;
  let power = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    decimal += Number(num[i]) * Math.pow(2, power);
    power++;
  }
  return decimal;
}

console.log(convertBinaryToDecimal("1011"));
