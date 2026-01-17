function twoSum(arr: number[], target: number, n: number) {
  // Write your code here.
  let hash: any = {};
  let ans = [];
  for (let i = 0; i < n; i++) {
    let temp = target - arr[i];
    if (hash.hasOwnProperty(temp) && hash[temp].length > 0) {
      ans.push([temp, arr[i]]);
      hash[temp].pop();
    } else {
      if (!hash[arr[i]]) {
        hash[arr[i]] = [i];
      } else {
        hash[arr[i]].push(i);
      }
    }
    console.log(`Hash is ${JSON.stringify(hash)}`);
    console.log(`ans array is ${JSON.stringify(ans)}`);
  }
  if (ans.length === 0) {
    return [[-1, -1]];
  }
  return ans;
};

const input = [3, 3, 3, 3, 3, 3, 3, 3, 3];
const target = 1;
const input2 = [1, -1, -1, 2, 2];

console.log(twoSum(input2, target, input2.length));