function repeatedNTimes(nums: number[]): number {
  let n = nums.length;
  const repeatCount = new Map();
  for (let i = 0; i < nums.length; i++) {
    repeatCount.set(nums[i], (repeatCount.get(nums[i]) || 0) + 1);
    if (repeatCount.get(nums[i]) == n / 2) {
      return nums[i];
    }
  }
  return -1;
}
