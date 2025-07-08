// Check if array includes a number
// Input: [1, 2, 3], 2 → Output: true

function includesNumber(arr, num) {
    if (arr.includes(num)) {
        return true;
    }
    return false;
}

const arr = [1, 2, 3];
const num = 2;
const result = includesNumber(arr, num);
console.log(result);