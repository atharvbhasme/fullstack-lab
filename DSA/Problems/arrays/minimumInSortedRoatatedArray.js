//Find the minimum element in a sorted array that has been rotated at an unknown pivot.
function minimumInSortedRoatatedArray(arr) {
  let low = 0;
  let high = arr.length - 1;
  //while condition should not be <= is should be <
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return arr[low];
}

const input = [4, 5, 6, 7, 1, 2];
console.log(minimumInSortedRoatatedArray(input));
