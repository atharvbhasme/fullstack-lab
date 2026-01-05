function maxMatrixSum(matrix: number[][]): number {
    let totalSum = 0;
    let minAbs = Infinity;
    let negativeCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const val = matrix[i][j];
            if (val < 0) negativeCount++;

            totalSum += Math.abs(val);
            minAbs = Math.min(minAbs, Math.abs(val));
        }
    }

    if (negativeCount % 2 === 0) {
        return totalSum;
    }

    return totalSum - 2 * minAbs;
}
