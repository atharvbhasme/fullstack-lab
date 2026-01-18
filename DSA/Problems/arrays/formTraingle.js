//You are given an integer of array/list 'ARR' of length ‘N. You are supposed to return true if it is possible to construct at least one non-degenerate triangle using values of array/list as sides of the triangle, otherwise, return false.
//A non-degenerate triangle's sides (\(a,b,c\)) must satisfy the triangle inequality theorem, where the sum of any two sides is strictly greater than the third (\(a+b>c\), \(a+c>b\), \(b+c>a\)). This ensures a positive area, distinguishing it from a degenerate triangle (area of 0).

//Brute Froce solution
function formTriangleBruteFroce(arr) {
  const n = arr.length;

  // Check all possible triplets
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const a = arr[i];
        const b = arr[j];
        const c = arr[k];

        if (a + b > c && a + c > b && b + c > a) {
          return "YES";
        }
      }
    }
  }
  return "NO";
}

//Optimal
//time complexity: O(n log n) + O(n) = O(nlogn)
//Combination of sort plus find
function formTriangle(arr) {
  arr.sort((a, b) => a - b); // sort array

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] > arr[i + 2]) {
      return "YES";
    }
  }
  return "NO";
}
