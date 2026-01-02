function validParenthesis(input) {
  let paranlevel = 0;
  let squarelevel = 0;
  let curlylevel = 0;
  for (let char of input) {
    //check for parenthesis
    if (char === "(") {
      paranlevel++;
    } else if (char === ")") {
      paranlevel--;
    }

    //check for square bracket
    if (char === "[") {
      squarelevel++;
    } else if (char == "]") {
      squarelevel--;
    }

    //check for curly brackets
    if (char === "{") {
      curlylevel++;
    } else if (char === "}") {
      curlylevel--;
    }
  }
  if (paranlevel == 0 && curlylevel == 0 && squarelevel == 0) {
    return "Balanced";
  } else {
    return "Not Balanced";
  }
}

const input1 = "[()]{}{[()()]()}";
const input2 = "[[}[";
const input3 = "([)]";

console.log(validParenthesis(input3));
