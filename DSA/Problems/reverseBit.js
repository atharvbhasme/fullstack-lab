//Reverse bits of a given 32 bits signed integer.

function reverseBits(n) {
  let result = 0;
  console.log(n.toString(2));
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    console.log("result --->", result.toString(2));
    console.log("value of n -->", n.toString(2));
    n >>>= 1;
  }

  return result >>> 0;
}

console.log(reverseBits(13));
