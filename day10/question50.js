// Square each element
// Input: [2,3] → Output: [4,9]

function squareEachElement(arr) {
    let newArr = [];

    for (let i of arr) {
        newArr.push(i * i);
    }

    return newArr;
}

const arr = [2, 3];
const result = squareEachElement(arr);
console.log(result);