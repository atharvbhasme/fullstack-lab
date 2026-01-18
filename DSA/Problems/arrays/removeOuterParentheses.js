function removeOuterParentheses(input) {
  let result = "";
  let level = 0;
  for (let char of input) {
    if (char === "(") {
      if (level > 0) {
        result += char;
      }
      level++;
    } else if (char === ")") {
      level--;
      if (level > 0) {
        result += char;
      }
    }
  }
  return result;
}
