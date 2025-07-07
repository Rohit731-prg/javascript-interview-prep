// Find number of words in string
// Input: "I am Groot" → Output: 3

function wordCounter(str) {
    const newStr = str.split(" ");
    return newStr.length;
}

const str = "I am Groot";
const result = wordCounter(str);
console.log(result);