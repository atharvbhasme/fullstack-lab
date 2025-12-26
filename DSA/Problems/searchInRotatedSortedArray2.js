//Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False.
//For duplicates

const input1 = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
function searchInRotatedSortedArray2(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[low] === arr[mid] && arr[high] === arr[mid]) {
      low++;
      high--;
      continue;
    }
    if (arr[low] <= arr[mid]) {
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

console.log(searchInRotatedSortedArray2(input1, 3));
