function twoSum(arr, target, n) {
    // Write your code here.
    var hash = {};
    var ans = [];
    for (var i = 0; i < n; i++) {
        var temp = target - arr[i];
        if (hash.hasOwnProperty(temp) && hash[temp].length > 0) {
            ans.push([temp, arr[i]]);
            hash[temp].pop();
        }
        else {
            if (!hash[arr[i]]) {
                hash[arr[i]] = [i];
            }
            else {
                hash[arr[i]].push(i);
            }
        }
        console.log("Hash is ".concat(JSON.stringify(hash)));
        console.log("ans array is ".concat(JSON.stringify(ans)));
    }
    if (ans.length === 0) {
        return [[-1, -1]];
    }
    return ans;
}
;
var input = [3, 3, 3, 3, 3, 3, 3, 3, 3];
var target = 1;
var input2 = [1, -1, -1, 2, 2];
console.log(twoSum(input2, target, input2.length));
