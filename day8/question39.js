// Flatten nested array
// Input: [1, [2, [3]]] → Output: [1,2,3]

function Flatten(arr) {
    return arr.flat(Infinity);
}

const arr = [1, [2, [3]]];
const result = Flatten(arr);
console.log(result);