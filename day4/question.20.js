// Check if string ends with substring
// Input: "backend", "end" → Output: true

function characterCheck(str, subStr) {
    if(str.endsWith(subStr)) {
        return true;
    }
    return false;
}

const str = "backend";
const subStr = "end";
const result = characterCheck(str, subStr);
console.log(result);