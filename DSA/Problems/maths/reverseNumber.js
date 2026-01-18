function reverseNumber(number) {
  let ans = 0;
  while (number > 0) {
    let digit = number % 10;
    ans = ans * 10 + digit;
    number = Math.floor(number / 10);
  }
  return ans;
}

console.log(reverseNumber(80));
