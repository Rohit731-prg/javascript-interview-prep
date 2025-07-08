// Sum all elements in array
// Input: [1, 2, 3] → Output: 6

function sumArray(arr) {
    let sum = 0;

    for (let i of arr) {
        sum += i;
    }

    return sum;
}

const arr = [1, 2, 3];
const result = sumArray(arr);
console.log(result);