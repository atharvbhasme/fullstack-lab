function findSumOfDivisors(num) {
  let sum = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      let other = num / i;
      if (other == i) {
        sum += i;
      } else {
        sum += i + other;
      }
    }
  }
  console.log(sum);
}

findSumOfDivisors(4563);
