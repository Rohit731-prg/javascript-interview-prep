// Find most frequent element
// Input: [1,3,3,2] → Output: 3

function findFrequentElement(arr) {
    let count = 0;
    let element = 0;

    for (let i = 0; i <= arr.length; i++) {
        let newCount = 0;
        for (let j = 0; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                newCount++;
            }
        }
        if (count < newCount) {
            count = newCount;
            element = arr[i];
        }
    }

    return element;
}

const arr = [1, 3, 3, 2];
const result = findFrequentElement(arr);
console.log(result);