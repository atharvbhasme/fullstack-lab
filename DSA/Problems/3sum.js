// Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

const input = [-1, 0, 1, 2, -1, -4];

//bruteFroce
function threeSumBruteFroce(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          arr[i] + arr[j] + arr[k] === 0 &&
          arr[i] != arr[j] &&
          arr[j] != arr[k] &&
          arr[i] != arr[k]
        ) {
          console.log(arr[i] + arr[j] + arr[k]);
          ans.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return ans;
}

//optimal solution
function threeSumOptimal(arr) {
  arr.sort((a, b) => a - b);
  let ans = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let sum = arr[left] + arr[right] + arr[i];
      if (sum === 0) {
        ans.push([arr[left], arr[right], arr[i]]);
        left++;
        right--;

        //remove the duplicate from left
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        //remove the duplicate from right
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
}

console.log(threeSumOptimal(input));
