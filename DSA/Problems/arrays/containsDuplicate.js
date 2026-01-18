//Contains Duplicate : Check if a value appears atleast twice

const input1 = [1, 2, 3, 1];
const input2 = [1, 2, 3, 4];
const input3 = [];
const input4 = [0, 0];

//Brute Force Approach
// Time Complexity: O(n²)
// Space Complexity: O(1)
function conatinsDuplicateBruteFroce(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        return true;
      }
    }
  }
  return false;
}

//Better Force Approach
//Time Complexity: O(n log n)
//Space Complexity: O(1)
function conatinsDuplicateBetter(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }
  return false;
}

//Optimal Appraoch
//Time Complexity: O(n)
//Space Complexity: O(n)
function conatinsDuplicateOptimal(arr) {
  const unique = new Set(arr);
  return unique.size < arr.length;
}

// console.log(`contain duplicate: ${conatinsDuplicateBruteFroce(input3)}`);
// console.log(`contain duplicate: ${conatinsDuplicateBetter(input1)}`);
console.log(`contain duplicate: ${conatinsDuplicateOptimal(input1)}`);
