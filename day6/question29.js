// Find average of array
// Input: [1, 2, 3, 4] → Output: 2.5

function findAverage(arr) {
    let sum = 0;

    for (let i of arr) {
        sum += i;
    }
    return sum / arr.length;
}

const arr = [1, 2, 3, 4];
const result = findAverage(arr);
console.log(result);