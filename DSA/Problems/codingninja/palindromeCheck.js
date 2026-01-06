function checkPallindrome(input) {
  let n = input.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let leftChar = input[i];
    let rightChar = input[n - 1 - i];
    if (leftChar !== rightChar) {
      return false;
    }
  }
  return true;
}
