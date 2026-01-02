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
  return num;
}

console.log(
  `setting set bit for number ${5}:${(5).toString(2)} at ${(1).toString(
    2
  )}: numnber ${setBitAtTarget(5, 1)} bianry:${setBitAtTarget(5, 1).toString(
    2
  )}`
);

//clean the ith bit(set it to 0)
function cleanBitAtTarget(num, target) {
  num = num & ~(1 << target);
  return num;
}

console.log(
  `setting clean bit for number ${12}:${(12).toString(
    2
  )} at ${2}: numnber ${cleanBitAtTarget(12, 2)} bianry:${cleanBitAtTarget(
    12,
    2
  ).toString(2)}`
);

//toggle the target bit (o -> 1 and 1 -> 0)
function toggleTargetBit(number, target) {
  return number ^ (1 << target);
}

console.log(
  `Toggle bit of ${12}:${(12).toString(2)} is ${toggleTargetBit(12, 2).toString(
    2
  )}`
);

//remove(set it to zero) the right most set bit
function removeRightMostSetBit(number) {
  return number & (number - 1);
}

console.log(`removing the right most set bit ${removeRightMostSetBit(40)}`);

function checkifPowerOf2(number) {
  return (number & (number - 1)) === 0;
}

console.log(`check if ${7} is power of 2: ${checkifPowerOf2(7)}`);

//check odd or even
function checkOddOrEven(num) {
  if ((num & 1) == 1) {
    return "odd";
  } else {
    return "even";
  }
}

console.log(
  `check number: ${3} is odd or even usign bitwise operations ${checkOddOrEven(
    3
  )}`
);

//find the number of set bits
function findTheNumberOfSetBit(number) {
  let counter = 0;
  while (number > 0) {
    if (number % 2 !== 0) {
      counter++;
    }
    number = Math.floor(number / 2);
  }
  return counter;
}

// console.log(
//   `the number of set bit in ${13}: ${(13).toString(
//     2
//   )} are/is ${findTheNumberOfSetBit(13)}`
// );

//find the number of set bit using bitwise opertion
//find the number of set bits
function findTheNumberOfSetBitUsingBitwise(number) {
  let counter = 0;

  //one approach is
  // while (number > 0) {
  //   counter += number & 1;
  //   number = number >> 1;
  // }
  // return counter;

  //optimised approach
  while (number !== 0) {
    number = number & (number - 1);
    counter++;
  }
  return counter;
}

console.log(
  `the number of set bit in ${13}: ${(13).toString(
    2
  )} are/is ${findTheNumberOfSetBitUsingBitwise(13)}`
);
