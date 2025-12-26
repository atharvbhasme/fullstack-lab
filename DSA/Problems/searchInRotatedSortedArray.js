//Given an integer array nums, sorted in ascending order (with distinct values) and a target value k. The array is rotated at some pivot point that is unknown. Find the index at which k is present and if k is not present return -1.

const input1 = [4, 5, 6, 7, 0, 1, 2];

function searchInRotatedSortedArray(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[low] <= arr[mid]) {
      // Left half is sorted
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1; // Target in left sorted half
      } else {
        low = mid + 1; // Target in right half
      }
    } else {
      // Right half is sorted
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1; // Target in right sorted half
      } else {
        high = mid - 1; // Target in left half
      }
    }
  }
  return -1;
}

console.log(`index ${searchInRotatedSortedArray(input1, 2)}`);
