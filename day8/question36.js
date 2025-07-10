// Find second largest number
// Input: [3,5,1,2] → Output: 3

function find2ndLargest(arr) {
    // let largest = arr[0];
    // let count = 0;

    const newArr = arr.sort((a, b) => b - a);
    return newArr[1];
}

const arr = [3, 5, 1, 2];
const result = find2ndLargest(arr);
console.log(result);