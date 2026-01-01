//How many ways you can swap the two numbers

//using array
let a = 1;
let b = 2;

console.log(`Before Swapping A is ${a} and B is ${b}`);

[a, b] = [b, a];

console.log(`After Swapping A is ${a} and B is ${b}`);

//using temp
let num1 = 4;
let num2 = 8;
let temp;

console.log(`Before Swapping num1 is ${num1} and num2 is ${num2}`);

num1 = temp;
num1 = num2;
num2 = temp;

console.log(`After Swapping num1 is ${num1} and num2 is ${num2}`);

//without using any temp and using operaters
let x = 10;
let y = 20;

x = x + y; //x = 30
y = x - y; //y = 10
x = x - y; //x = 10

//swapping array index
const arr = [1, 2, 3, 4];
const index1 = 1; // value 2
const index2 = 3; // value 4

console.log(`\n Before Swapping \n`);
console.log(arr);

[arr[index1], arr[index2]] = [arr[index2], arr[index1]];

console.log(`\n After Swapping \n`);
console.log(arr);

//using Binary XOR
//XOR, even 1's are zero and odd 1' are 1
//number ^ nummber = 0

let b1 = 34;
let b2 = 12;

console.log(`Before Swapping num1 is ${b1} and num2 is ${b2}`);

b1 = b1 ^ b2;
b2 = b1 ^ b2;
b1 = b1 ^ b2;

console.log(`After Swapping is ${b1} and num2 is ${b2}`);
