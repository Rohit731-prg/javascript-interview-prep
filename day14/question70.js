// Check if number is divisible by 3 and 5
// Input: 15 → Output: true

function isDivisibleBy3And5(num) {
    if (num % 3 === 0 && num % 5 === 0) return true;
    return false;
}

const num = 15;
const result = isDivisibleBy3And5(num);
console.log(result);