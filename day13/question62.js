// Find GCD of two numbers
// Input: 8, 12 → Output: 4

function findGCD(num1, num2) {
    let gcd = 0;

    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

const num1 = 8;
const num2 = 12;
const result = findGCD(num1, num2);
console.log(result);