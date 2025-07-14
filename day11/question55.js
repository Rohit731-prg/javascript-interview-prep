// 55. Sum of digits in a number
// Input: 123 → Output: 6

function sumOfDigits(num) {
    const str = num.toString();
    const arr = str.split('').map(Number);
    let sum = 0;

    for (let i of arr) {
        sum += i;
    }

    return sum;
}

const num = 123;
const result = sumOfDigits(num);
console.log(result);