//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

const input1 = [1, 2, 3, 4];
const input2 = [-1, 1, 0, -3, 3];
const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//
function productExceptSelfBruteFroce(arr) {
  const ans = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i != j) {
        product = product * arr[j];
      }
    }
    console.log(product);
    ans.push(product);
  }
  return ans;
}

//better appraoch
//Time Complexity:  O(n)
//Space Complexity: O(n)
function productExceptSelfBetter(arr) {
  let n = arr.length;
  let ans = new Array(n);
  let beforeArr = new Array(n).fill(1);
  let afterArr = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    beforeArr[i] = arr[i - 1] * beforeArr[i - 1];
  }

  for (let j = n - 2; j >= 0; j--) {
    afterArr[j] = arr[j + 1] * afterArr[j + 1];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = beforeArr[i] * afterArr[i];
  }

  return ans;
}

//Optimal Solution
//Time Complexity:  O(n)
//Space Complexity: O(1)
function productExceptSelfOptimal(arr) {
  let n = arr.length;
  let idx = -1;
  let zeros = 0;
  let prod = 1;
  let ans = new Array(n).fill(0);
  //find the zeros and prod
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      zeros++;
      idx = i;
    } else {
      prod *= arr[i];
    }
  }

  if (zeros === 0) {
    for (let i = 0; i < n; i++) {
      ans[i] = Math.floor(prod / arr[i]);
    }
  } else if (zeros === 1) {
    ans[idx] = prod;
  }

  return ans;
}
// console.log(`Product: ${productExceptSelfBruteFroce(input2)}`);
// console.log(`Product: ${productExceptSelfBetter(input3)}`);
console.log(`Product: ${productExceptSelfOptimal(input2)}`);
