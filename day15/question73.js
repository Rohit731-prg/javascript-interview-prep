// Find number of trailing zeros in factorial
// Input: 10 → Output: 2

function trailingZeros(n) {
    let count = 0;
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    while (fact % 10 === 0) {
        count++;
        fact /= 10;
    }

    return count;
}

console.log(trailingZeros(10));