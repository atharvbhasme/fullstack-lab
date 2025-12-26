//Maximum Product Subarray in an Array
//Given an array that contains both negative and positive integers, find the maximum product subarray.

const input1 = [1, 2, 3, 4, 5, 0];
const input2 = [1, 2, -3, 0, -4, -5];
const input3 = [];

//Brute Froce
//Time Complexity: O(N^2)
//Space Complexity: O(1)
function maxProductOfSubArrBruteFroce(arr) {
  let n = arr.length;
  let maxProd = 1;
  for (let i = 0; i < n; i++) {
    let prod = arr[i];
    for (let j = i; j < n; j++) {
      prod *= arr[j];
      maxProd = Math.max(prod, maxProd);
    }
  }
  return maxProd;
}

//optimal solution 1
//Time Complexity: O(n)
//Space Complexity: O(1)
function maxProductOfSubArrOtimal1(arr) {
  let n = arr.length;
  let prerfix = 1;
  let suffix = 1;
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    if (prerfix === 0) {
      prerfix = 1;
    }

    if (suffix === 0) {
      suffix = 1;
    }

    prerfix *= arr[i];

    suffix *= arr[n - i - 1];

    ans = Math.max(ans, prerfix, suffix);
  }

  return ans;
}

//optimal solution 2
//Time Complexity: O(n)
//Space Complexity: O(1)
function maxProductOfSubArrOtimal2(arr) {
  let n = arr.length;
  let maxProd = arr[0];
  let minProd = arr[0];
  let ans = arr[0];
  for (let i = 0; i < n; i++) {
    let curr = arr[i];

    // Swap max and min if current is negative
    if (curr < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    // Update max and min product
    maxProd = Math.max(curr, maxProd * curr);
    minProd = Math.min(curr, minProd * curr);

    ans = Math.max(ans, maxProd);
  }

  return ans;
}
console.log(`Max Product is ${maxProductOfSubArrOtimal2(input1)}`);
