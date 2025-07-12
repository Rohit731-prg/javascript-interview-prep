// Double each element
// Input: [1,2,3] → Output: [2,4,6]

function doubleEachElement(arr) {
    let newArr = [];

    for (let i of arr) {
        newArr.push(i * 2);
    }

    return newArr;
}

const arr = [1, 2, 3];
const result = doubleEachElement(arr);
console.log(result);