//strings are primitve data types in JS that used to maniplate the text data
//string are immutable in JS

let s1 = "Hello";
let s2 = "World";
let s3 = `Hello ${s2}`; // Template literal

s1.length; // 5
s1[0]; //H
s1.charAt(0); //H

//interating on string

for (let i = 0; i < s1.length; i++) {
  console.log(s1[i]);
}

for (let val of s1) {
  console.log(val);
}

//string conversion
//string to array

const input = "abcfojahsd";
const arr = input.split("");
console.log(arr);

//array to string
const str = arr.join("");
console.log(str);

const upperCase = str.toUpperCase();
console.log(upperCase);

const lowerCase = upperCase.toLowerCase();
console.log(lowerCase);

//substrig extraction methods in JS
//slice
const java = "JavaScript".slice(0, 4);

/**
 * Returns a section of a string.
 * @param start The index to the beginning of the specified portion of stringObj.
 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
 * If this value is not specified, the substring continues to the end of stringObj.
 */
//slice(start?: number, end?: number): string;

const substr = "yeren yegar".slice(5, 8);
console.log(substr);

//searching and matching
const s = "abcdefghi";
console.log(`inclue : ${s.includes("d")}`);
console.log(`index of f is ${s.indexOf("f")}`);

//replace and replace all
console.log("abcabc".replace("a", "z")); // "zbcabc"
console.log("abcabc".replaceAll("a", "z")); // "zbczbc"

//trimming
"  hello  ".trim(); // "hello"
"  hello".trimStart(); // "hello"
"hello  ".trimEnd(); // "hello"

//string comparision
"a" === "a"; // true
"a" > "b"; // false (lexicographical)
