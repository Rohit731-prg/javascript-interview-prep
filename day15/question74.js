// Find all divisors of a number
// Input: 6 → Output: [1, 2, 3, 6]

function findDivisors(num) {
    const result = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }

    return result;
}

const num = 6;
const result = findDivisors(num);
console.log(result);