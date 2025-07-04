// Remove duplicate characters from a string
// Input: "aabbcc" → Output: "abc"

function removeDuplicate(str) {
    let newStr = [];
    const arrStr = str.split("")

    for (let i of arrStr) {
        if (!newStr.includes(i)) {
            newStr.push(i);
        }
    }

    return newStr.join("");
}

const str = "aabbcc";
const newStr = removeDuplicate(str);
console.log(newStr);