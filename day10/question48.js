// Sum of odd numbers
// Input: [1,2,3,4] → Output: 4

function sumOfOddNumbers(arr) {
    let sum = 0;

    for (let i of arr) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    return sum;
}

const arr = [1, 2, 3, 4];
const result = sumOfOddNumbers(arr);
console.log(result);