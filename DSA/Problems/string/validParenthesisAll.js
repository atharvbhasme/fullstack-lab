function validParenthesisAll(input) {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let char of input) {
    if (map[char]) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

const input1 = "[()]{}{[()()]()}";
const input2 = "[[}[";
const input3 = "([)]";

console.log(validParenthesisAll(input1));
