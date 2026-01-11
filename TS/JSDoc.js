// @ts-check

/**
 * Adds Two numbers together.
 * @param {number} a - The frist Number.
 * @param {number} b - The Second Number;
 * @return {number} sum of two numnber;
 * @example
 * add(2, 3); // 5
 */
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

/** @type {number} */
let count = 10;

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {number} age
 */

/** @type {User} */
const user = {
  id: "1",
  name: "Atharv",
  age: 22,
};

/**
 * @returns {boolean}
 * @param {number} n to check the number is odd or eve
 */
function isEven(n) {
  return n % 2 === 0;
}

/**
 * @throws {Error} When number is negative
 * @param {number} n number which we need to find the square
 */
function sqrt(n) {
  if (n < 0) throw new Error("Negative number");
  return Math.sqrt(n);
}
