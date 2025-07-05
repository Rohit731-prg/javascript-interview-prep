// Check if string starts with a substring
// Input: "hello", "he" → Output: true

function checkStr(str, subStr) {
    return str.startsWith(subStr);
}

const inputString = "hello";
const subString = "he";

const outputBoolean = checkStr(inputString, subString);
console.log(outputBoolean);