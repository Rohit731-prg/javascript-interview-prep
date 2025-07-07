// Check if all characters are unique
// Input: "abcde" → Output: true

function checkChar(str) {
    const newStr = str.split("");
    let arr = [];

    for (let char of newStr) {
        if (arr.includes(char)) {
            return false;
        }
        arr.push(char);
    }
    return true;
}

const str = "abcde";
const result = checkChar(str);
console.log(result);