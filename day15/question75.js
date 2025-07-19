// Find the first digit of a number
// Input: 1234 → Output: 1

function firstDigit(num) {
    const str = num.toString();
    return parseInt(str.charAt(0));
}

const num = 1234;
const result = firstDigit(num);
console.log(result);