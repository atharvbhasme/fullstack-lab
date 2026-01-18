// We are given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:
// 1.We can buy and sell a stock only once.
// 2.We can buy and sell the stock on any day but to sell the stock, we need to first buy it on the same or any previous day.
// We need to tell the maximum profit one can get by buying and selling this stock.

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
const prices3 = [0, 2, 0, 1];
const prices4 = [];
const prices5 = [0, 0];

//brute-froce solution
//Time Complexity: O(n²)
//Space Complexity: O(1)
function stockBuyAndSellBruteFroce(arr) {
  const n = arr.length;
  let maxProfit = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let profit = arr[j] - arr[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

console.log(`Max profit brute force ${stockBuyAndSellBruteFroce(prices5)}`);

//Optimal Solution

// function stockBuyAndSellOptimal(arr){
//     let n = arr.length;
//     let maxProfit = 0;
//     let i = 0;
//     let j = 1;
//     while(j < n){
//         const profit = arr[j] - arr[i];
//         console.log(`values of i: ${i} and j: ${j}`)
//         console.log(`Profit is ${profit}`)
//         if(profit > maxProfit && profit > 0){
//             maxProfit = profit;
//             j++;
//         }else if(arr[i] > arr[i+1]){
//            i++;
//            j++
//         }
//         else{
//             j++;
//         }
//     }
//     return maxProfit;
// }

function stockBuyAndSellOptimal(arr) {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (const n of arr) {
    minPrice = Math.min(n, minPrice);
    maxProfit = Math.max(maxProfit, n - minPrice);
  }
  return maxProfit;
}

console.log(`Profit is Optimal ${stockBuyAndSellOptimal(prices1)}`);
