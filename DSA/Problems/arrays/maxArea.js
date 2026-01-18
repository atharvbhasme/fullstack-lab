//Given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container.
//Time Complexity: O(n²)
function maxAreaBruteFroce(arr) {
  let maxArea = 1;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      area = (j - i) * Math.min(arr[i], arr[j]);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
}

function maxAreaOptimal(arr) {
  let n = arr.length;
  let i = 0;
  let j = n - 1;
  let maxArea = -Infinity;
  while (i < j) {
    let area = (j - i) * Math.min(arr[i], arr[j]);

    maxArea = Math.max(area, maxArea);

    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
}

const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const input2 = [1, 4, 2, 3];
const input3 = [1, 1];

console.log(maxAreaOptimal(input3));
