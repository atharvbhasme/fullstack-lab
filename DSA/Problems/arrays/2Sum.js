//Given an array of integers arr[] and an integer target.
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

//BruteForce
//Time Complexity: O(N²)
//Space COmplexity: O(1)

const inputArr = [2, 6, 5, 8, 11];
const target = 14;

function twoSumBruteForce(arr, target) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = arr[i] + arr[j];
      if (sum == target) {
        console.log(`\n ${true} \n`);
        return [i, j];
      }
    }
  }
  console.log(`\n ${false} \n`);
  return [-1, -1];
}

// console.log(twoSumBruteForce(inputArr, target));

//Better Appraoch
//Time Complexity: O(N)
//Space Complexity: O(N)
function twoSumWithMap(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      console.log(`\n ${true} \n`);
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  console.log(`\n ${false} \n`);
  return [-1, -1];
}

console.log(twoSumWithMap(inputArr, target));

//optimal Approach
//only work when array is sorted (or we need to sort array)
//Time Complexity: O(N log N)
//Space Complexity: O(N)
function twoSumOptimal(arr, target) {
  const n = arr.length;
  const sortIndexWithNumber = arr.map((val, idx) => [val, idx]);
  sortIndexWithNumber.sort((a, b) => a[0] - b[0]);
  let left = 0;
  let right = n - 1;
  while (left < right) {
    // console.log(`value of left ${left}`)
    // console.log(`value of right ${right}`)
    let sum = sortIndexWithNumber[left][0] + sortIndexWithNumber[right][0];
    if (sum === target) {
      // Found a pair with sum equal to target
      return [left, right];
    } else if (sum < target) {
      // Sum too small, move left pointer to right to increase sum
      left++;
    } else {
      // Sum too large, move right pointer to left to decrease sum
      right--;
    }
  }
  return [-1, -1];
}

console.log(twoSumOptimal(inputArr, target));
