//Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

//usign library
function hammingWeight(n) {
  const binaryN = n.toString(2);
  let count = 0;
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] == "1") {
      count++;
    }
  }
  return count;
}

//without usign library
//using counting methods
function hammingWeightCounting(n) {
  var count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
