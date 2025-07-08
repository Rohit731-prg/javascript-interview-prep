// Find max in an array
// Input: [3, 1, 9, 2] → Output: 9

function findMax(arr) {
    let max = arr[0];

    for ( let i of arr) {
        if (i > max) max = i;
    }
    return max;
}

const arr = [3, 1, 9, 2];
const result = findMax(arr);
console.log(result);