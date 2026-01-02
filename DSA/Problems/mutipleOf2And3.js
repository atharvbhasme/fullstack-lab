const n = 20;
const input = [
  868, 394, 416, 352, 907, 19, 959, 568, 420, 692, 114, 872, 489, 964, 826, 840,
  394, 265, 100, 615,
];

function mutipleOf2And3(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0 || arr[i] % 3 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(mutipleOf2And3(input, n));
