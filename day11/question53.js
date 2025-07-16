// 53. Print factorial of a number
// Input: 5 → Output: 120

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

const num = 5;
const result = factorial(num);
console.log(result);