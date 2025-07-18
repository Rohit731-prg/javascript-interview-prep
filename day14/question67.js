// Count even digits in a number
// Input: 248 → Output: 3

function countEvenDigits(num) {
    const arr = num.toString().split('').map(Number);
    let count = 0;

    for (let i of arr) {
        if (i % 2 === 0) {
            count++;
        }
    }

    return count;
}

const num = 248;
const result = countEvenDigits(num);
console.log(result);