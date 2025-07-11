// 43. Chunk array into parts
// Input: [1,2,3,4], size=2 → Output: [[1,2],[3,4]]

function chunkArray(arr, size) {
    let newArr = [];

    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }

    return newArr;
}

const arr = [1, 2, 3, 4];
const size = 2;
const result = chunkArray(arr, size);
console.log(result);