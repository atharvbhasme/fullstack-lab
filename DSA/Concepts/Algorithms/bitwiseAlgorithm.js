//Bitwise operation in JS

//convert decimal to binary

const a = 4;
const b = 7;
const c = 49;

console.log(`a in binary is ${a.toString(2)}`);
console.log(`b in binary is ${b.toString(2)}`);
console.log(`c is binary is ${c.toString(2)}`);

//& operator only 1 and 1 is 1, all are 0
console.log(`Binary is ${(a & b).toString(2)} and Decimal is ${a & b}`);
console.log(`Binary is ${(c & b).toString(2)} and Decimal is ${c & b}`);

//| operator only 0 and 0 is 0, all are 1;
console.log(`Binary is ${(a | b).toString(2)} and Decimal is ${a | b}`);
console.log(`Binary is ${(c | b).toString(2)} and Decimal is ${c | b}`);

//^ xor operation, return 1 if both are different
console.log(`Binary is ${(a ^ b).toString(2)} and Decimal is ${a ^ b}`);
console.log(`Binary is ${(c ^ b).toString(2)} and Decimal is ${c ^ b}`);

//what is 1's complement
//flip the bit for e.g 1's complement of 101 is 010

//what is 2's complement
//first do the 1's complement and then 1 to that flip

//- negative number of binary is 2's complement of that number

//check if the target bit it set or not
function checkIfSetOrNot(number, target) {
  return ((number >> target) & 1) === 1;
}

console.log(
  `Is set exists at ${2} : ${checkIfSetOrNot(
    5,
    2
  )}, Binary number is ${(5).toString(2)}`
);

//set the target bit to set(1);

function setBitAtTarget(num, target) {
  num = num | (1 << target);
}

//check odd or even
function checkOddOrEven(num) {
  if ((num & 1) == 1) {
    return "odd";
  } else {
    return "even";
  }
}
