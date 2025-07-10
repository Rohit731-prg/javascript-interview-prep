// Rotate array right by 1
// Input: [1,2,3] → Output: [3,1,2]

function rotateArray(arr) {
    const temp = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}

const arr = [1, 2, 3];
const result = rotateArray(arr);
console.log(result);