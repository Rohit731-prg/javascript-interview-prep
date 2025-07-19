// Remove even numbers from array
// Input: [1,2,3,4] → Output: [1,3]

function removeEvenNumber(arr) {
    let str = arr.filter((num) => num % 2 !== 0)
    return str
}

const arr = [1, 2, 3, 4];
const result = removeEvenNumber(arr);
console.log(result);