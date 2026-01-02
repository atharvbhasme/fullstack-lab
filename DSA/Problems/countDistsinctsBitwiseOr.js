function countDistsinctsBitwiseOr(arr) {
  let result = new Set();
  let prev = new Set();
  for (let x of arr) {
    let curr = new Set();
    curr.add(x);

    for (let val of prev) {
      curr.add(x | val);
    }

    for (let val of curr) {
      result.add(val);
    }
    prev = curr;
  }
  return result.size;
}

console.log(`Ans is ${countDistsinctsBitwiseOr([1, 2, 3])}`);
