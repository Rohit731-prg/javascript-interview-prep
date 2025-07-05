// Get ASCII value of a character
// Input: "A" → Output: 65

function getAsciiValue(char) {
    return char.charCodeAt(0);
}

const inputChar = "A";
const asciiValue = getAsciiValue(inputChar);
console.log(asciiValue);