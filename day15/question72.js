// Sum numbers from 1 to n
// Input: 5 → Output: 15

function sumofLimit(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

const num = 5;
const result = sumofLimit(num);
console.log(result);