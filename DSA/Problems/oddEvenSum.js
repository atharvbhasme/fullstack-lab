function even_odd_sum(num) {
  /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output array */

  //Return an array of evensum & oddsum like {evensum , oddsum};
  let evensum = 0;
  let oddsum = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 0) {
      evensum += digit;
    } else {
      oddsum += digit;
    }
    num = Math.floor(num / 10);
  }
  return [evensum, oddsum];
}
