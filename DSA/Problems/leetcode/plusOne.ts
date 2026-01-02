function plusOne(digits: number[]): number[] {
    let n = digits.length;
    if(digits[n-1]===9){
        let i = n-1;
        while(i>=0){
            if(digits[i]===9){
                digits[i] = 0;
                i--;
            }else{
                digits[i] = digits[i] + 1;
                break;
            }
        }
    }else{
        digits[n-1] = digits[n-1] + 1;
    }
    if(digits[0]===0){
        digits.unshift(1);
    }
    return digits;
};