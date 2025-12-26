class BinarySeach {
  constructor(arr) {
    this.arr = arr;
  }

  binarySearch(arr, target) {
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    while (start <= end) {
      let mid = Math.floor((end + start) / 2);
      if (arr[mid] == target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }

  binarySearchRecurssion(arr, start, end, target) {
    if (start > end) {
      return -1;
    }

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return this.binarySearchRecurssion(arr, mid + 1, end, target);
    } else {
      return this.binarySearchRecurssion(arr, start, mid - 1, target);
    }
  }

  search(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    return this.binarySearchRecurssion(arr, start, end, target);
  }
}

const bn = new BinarySeach();
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(bn.binarySearch(input, 4));
console.log(bn.search(input, 4));
