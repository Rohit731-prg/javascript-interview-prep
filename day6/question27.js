// Find min in an array
// Input: [3, 1, 9, 2] → Output: 1

function findMin(arr) {
    let min = arr[0];

    for (let i of arr) {
        if (i < min) min = i;
    }
    return min;
}

const arr = [3, 1, 9, 2];
const result = findMin(arr);
console.log(result);