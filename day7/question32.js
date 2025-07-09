// Remove duplicates from array
// Input: [1, 2, 2, 3] → Output: [1, 2, 3]

function removeDuplicate(arr) {
    let result = [];

    for (let char of arr) {
        if (!result.includes(char)) {
            result.push(char);
        }
    }
    return result;
}

const arr = [1, 2, 2, 3];
const result = removeDuplicate(arr);
console.log(result);