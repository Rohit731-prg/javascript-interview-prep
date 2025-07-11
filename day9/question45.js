// 45. Move zeros to end
// Input: [0,1,0,3] → Output: [1,3,0,0]

function moveZerosToEnd(arr) {
    let newArr = [];
    let count = 0;

    for (let i of arr) {
        if(i !== 0) {
            newArr[count] = i;
        } else {
            count++;
        }
    }

    for (let i = 0; i < count; i++) {
        newArr.push(0);
    }

    return newArr;
}

const arr = [0, 1, 0, 3];
const result = moveZerosToEnd(arr);
console.log(result);