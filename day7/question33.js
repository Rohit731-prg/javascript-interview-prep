// Find intersection of two arrays
// Input: [1,2,3], [2,3,4] → Output: [2,3]

function findIntersection(arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}

const arr1 = [1,2,3];
const arr2 = [2,3,4];

const result = findIntersection(arr1, arr2);
console.log(result);