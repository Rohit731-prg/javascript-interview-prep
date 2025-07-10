// Check if array is sorted
// Input: [1,2,3] → Output: true

function isSorted(arr) {
    const newArr = arr.sort((a, b) => a - b);
    if (newArr.toString() === arr.toString()) {
        return true;
    }
    return false;
}

const arr = [1, 2, 3];
const result = isSorted(arr);
console.log(result);