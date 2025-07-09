// Find duplicate from array
// Input: [1, 2, 3, 1] → Output: 1

function findDuplicate(arr) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return -1;
}

const arr = [1, 2, 3, 1];
const result = dindDuplicate(arr);
console.log(result);