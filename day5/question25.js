// Check if string is a pangram
// Input: "The quick brown fox jumps over the lazy dog" → Output: true

function isPangram(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const newStr = str.toLowerCase().split(" ").join("");
    
    for (let char of alphabet) {
        if (!newStr.includes(char)) {
            return false;
        }
    }
    return true;
}

const str = "The quick brown fox jumps over the lazy dog";
const result = isPangram(str);
console.log(result);