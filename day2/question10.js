// Check if string contains only digits
// Input: "1234" → Output: true

function isDigit(str) {
    const newStr = str.split("")
    for (let i of newStr) {
        if (isNaN(i)) return false;
    }
    return true
}

const str = "1234";
const result = isDigit(str);
console.log(`${result ? "is" : "is not"} digits`);