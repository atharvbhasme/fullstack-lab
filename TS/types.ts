//Primitive Types

//boolean: boolean is type that give either true 
let isTrue = true;  

//number
let num:number = 10;

//bigint
let veryLargeNumber:bigint = BigInt("123456789012345678901234567890");

//null
let notInValue:null = null;

//undefined
let undefinedValue:undefined = undefined;

//Symbols: Give unique value to string we are passing
const id1 = Symbol("123");
const id2 = Symbol("123");
// if(id1 === id2){
//     console.log("This will not log")
// }else{
//     console.log("This will alawayslog")
// }

//interface: pecifically type an object using an interface that can be reused by multiple objects.
interface user {
    name: string;
    age: number
}

const user1:user = {
    name:"demoname",
    age: 12
}

//Enum: Enum help you defined the sert of constants

//always use string enum, do not use number enum
enum Environment {
  DEV = "development",
  STAGE = "staging",
  PROD = "production"
}

//array
const arr:string[] = ['one','two'];

//tuples:  another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
//exmpale
type stringNumberPair = [string, number];

const pair:stringNumberPair = ['one',1];
const first = pair[0];
const second = pair[1];

//index out of bond
// const thirs = pair[2];

//when to use tuple
//small, fixed, ordered data
//function returns


//unknown
//Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing
function log(value: unknown) {
  if (typeof value ===  "string") {
    console.log(value.toUpperCase());
  }
}


//never
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error('Something failed');
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

//any type
const obj:any = {}

obj.name

// /any disables type checking, unknown enforces validation before use, and never represents unreachable code paths or impossible values.


//-----
//type union
let mayBeNumberOrString : string | number = 12;
mayBeNumberOrString = "string";

//type intersection
interface A {
  a: string;
}

interface B {
  b: number;
}

type AB = A & B;
let value: AB = { a: 'hello', b: 42 };