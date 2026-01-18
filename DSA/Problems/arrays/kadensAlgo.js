//Kadane's Algorithm : Maximum Subarray Sum in an Array
//Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.

const input1 = [2, 3, 5, -2, 7, -4];
const input2 = [-2, -3, -7, -2, -10, -4];
const input3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//BruteForce
//Time Complexity : O(N^3)
// Space Complexity: O(1)
function kadenesAlgoBruteFroce(arr) {
  let maxi = -Infinity;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      maxi = Math.max(maxi, sum);
    }
  }
  return maxi;
}

//Better Appraoch
//Time Complexity: O(N^2)
//Space Complexity: O(1)
function kadenesAlgoBetter(arr) {
  let maxi = -Infinity;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      maxi = Math.max(maxi, sum);
    }
  }
  return maxi;
}

//Optimal Approach
//Time Complexity: O(n)
//Space Complexity: O(1)
function kadenesAlgoOptimal(arr) {
  let maxValue = -Infinity;
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    maxValue = Math.max(sum, maxValue);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxValue;
}

//If we want have the starting index and ending index of subarray
function kadenesAlgoFollowUp(arr) {
  let maxValue = -Infinity;
  let sum = 0;
  let n = arr.length;
  let startIndex = 0;
  let endingIndex = 0;
  for (let i = 0; i < n; i++) {
    if (sum == 0) {
      startIndex = i;
    }
    sum += arr[i];
    if (sum > maxValue) {
      maxValue = sum;
      endingIndex = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return [maxValue, startIndex, endingIndex];
}

console.log(`Sum is ${kadenesAlgoFollowUp(input3)}`);
