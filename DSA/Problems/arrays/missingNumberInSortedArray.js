function missingNumberInSortedArray(nums) {
  let n = nums.length;
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < n - 1; i++) {
    xor1 ^= nums[i];
    xor2 ^= i + 1;
  }

  xor1 ^= n;
  console.log(xor1 ^ xor2);
  return xor1 ^ xor2;
}

const input1 = [1, 2, 3, 4, 5];
console.log(`Missing number is ${missingNumberInSortedArray(input1)}`);
