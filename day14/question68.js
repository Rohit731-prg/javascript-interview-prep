// Find sum of squares of digits
// Input: 123 → Output: 14

function sumOfSquares(num) {
    const arr = num.toString().split('').map(Number);
    let sum = 0;
    
    for (let i of arr) {
        sum += i ** 2;
    }

    return sum;
}

const num = 123;
const result = sumOfSquares(num);
console.log(result);