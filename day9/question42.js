// 42. Remove falsy values
// Input: [0, "", null, "hi"] → Output: ["hi"]

function removeFalsyValues(arr) {
    let newArr = [];

    for (let i of arr) {
        if (i) {
            newArr.push(i);
        }
    }
    return newArr;
}

const arr = [0, "", null, "hi"];
const result = removeFalsyValues(arr);
console.log(result);