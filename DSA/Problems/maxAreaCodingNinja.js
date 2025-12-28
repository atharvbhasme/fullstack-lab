/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function findMaxArea(arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxA = -Infinity;
  while (i < j) {
    let area = (j - i) * Math.min(arr[i], arr[j]);
    maxA = Math.max(area, maxA);

    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxA;
}

function maxArea() {
  /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */

  /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */

  /*
   Log your output here 
   eg: console.log(x);
   */
  const numberOfTestCases = parseInt(readLine().trim());
  for (let t = 0; t < numberOfTestCases; t++) {
    const n = parseInt(readLine().trim());
    const arr = readLine().trim().split(" ").map(Number);

    const ans = findMaxArea(arr);
    console.log(ans);
  }
}

maxArea();
