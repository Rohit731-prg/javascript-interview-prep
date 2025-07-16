// Find missing number (1 to n)
// Input: [1,2,4,5] → Output: 3

function findMissingNumber(arr) {
    const start = arr[0];
    const end = arr[arr.length - 1];
    

    for (let i = start; i <= end; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }

    return -1;
}

const arr = [1, 2, 4, 5];
const result = findMissingNumber(arr);
console.log(result);