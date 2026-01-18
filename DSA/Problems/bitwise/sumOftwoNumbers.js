function getSum(a, b) {
  while (b !== 0) {
    console.log(b.toString(2));
    let carry = (a & b) << 1;
    console.log(`carry in decimal ${carry}`);
    console.log(`carry in binary ${carry.toString(2)}`);
    a = a ^ b;
    b = carry;
  }
  return a;
}

console.log(`ans is ${getSum(4, 7)}`);

// function getSubtraction(a,b){

// }
