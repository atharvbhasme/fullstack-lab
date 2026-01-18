function largestOddNumberInString(num) {
  let lastOddIndex = -1;
  for (let i = num.length - 1; i >= 0; i--) {
    if ((num[i] - "0") % 2 !== 0) {
      lastOddIndex = i;
      break;
    }
  }
  if (lastOddIndex === -1) {
    return "";
  }
  let result = "";
  for (let i = 0; i <= lastOddIndex; i++) {
    result += num[i];
  }
  return result;
}

console.log(largestOddNumberInString("53474"));
