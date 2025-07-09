// Merge two sorted arrays
// Input: [1,3], [2,4] → Output: [1,2,3,4]

function mergeArr (arr1, arr2) {
    return [...arr1, ...arr2].sort();
}

const arr1 = [1,3];
const arr2 = [2,4];

const result = mergeArr(arr1, arr2);
console.log(result);