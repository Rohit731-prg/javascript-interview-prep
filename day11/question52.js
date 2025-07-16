// 52. Check if number is prime
// Input: 7 → Output: true

function isPrime(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }

    if (count == 2) return true;
    return false;
}

const num = 7;
const result = isPrime(num);
console.log(result);