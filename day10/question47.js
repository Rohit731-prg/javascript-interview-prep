// Sum of even numbers
// Input: [1,2,3,4] → Output: 6

function sumOfEvenNumbers(arr) {
    let sum = 0;

    for (let i of arr) {
        if (i % 2 == 0) {
            sum += i;
        }
    }

    return sum;
}

const arr = [1, 2, 3, 4];
const result = sumOfEvenNumbers(arr);
console.log(result)