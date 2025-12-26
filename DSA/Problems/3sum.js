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
  const sortedArray = arr.sort((a, b) => a - b);
}

console.log(threeSumBruteFroce(input));
