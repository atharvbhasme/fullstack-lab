function sumFourDivisors(nums: number[]): number {
    let totalSum = 0;
    for(let i=0;i<nums.length;i++){
       let cnt = 0;
       let sum = 0;
       for(let j=1;j * j <= nums[i];j++){
        if(nums[i]%j==0){
            const other = nums[i]/j;

            if(other==j){
                cnt += 1;
                sum += j;
            }else{
                cnt += 2;
                sum +=  j + other;
            }

            if(cnt > 4){
                break;
            }
        }
       }
       if(cnt==4){
        totalSum += sum;
       }
    }
    return totalSum;
};