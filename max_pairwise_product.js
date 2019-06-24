const numbers = [1,2,3,4,5,6]

function MaxPairwiseProduct(numbers) {
    let result = 0;
    const n = numbers.length;
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; ++j) {
            if (numbers[i] * numbers[j] > result) {
                result = numbers[i] * numbers[j];
            }
        }
    }

    return result;
}

console.log(MaxPairwiseProduct(numbers))