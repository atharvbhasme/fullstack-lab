function reverseWordsInGivenStringBruteForce(str) {
  // Array to store words
  let words = [];

  // Variable to store current word
  let word = "";

  // Traverse each character
  for (let ch of s) {
    // If not space, add to word
    if (ch !== " ") {
      word += ch;
    }
    // If space and we have a word
    else if (word.length > 0) {
      // Add word to list
      words.push(word);
      // Reset word
      word = "";
    }
  }

  // Add last word if exists
  if (word.length > 0) {
    words.push(word);
  }

  // Reverse array
  words.reverse();

  // Join with single space
  return words.join(" ");
}

function reverseWordsInGivenString(input){
    let ans = "";
    let i = input.length - 1;
    while(i >= 0){
        while(i >= 0 && input[i] === " "){
            i--;
        }
        if(i < 0){
            break;
        }
        let end = i;
        while(i >= 0 && input[i] !== " "){
            i--;
        }
        let word = input.substring(end+1,i+1);
        if(ans.length > 0){
            ans += " ";
        }
        ans += word;
    }
    console.log(ans);
}

reverseWordsInGivenString("     amazing    coding skill ares ")
