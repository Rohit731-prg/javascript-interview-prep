// Find first non-repeating character
// Input: "aabbc" → Output: "c"

function findFirstNonRepeat(str) {
    const newStr = str.split("");
    let count = 0;

    for (let i = 0; i < newStr.length; i++) {
        count = 0;
        for (let j = 0; j < newStr.length; j++) {
            if (newStr[i] === newStr[j]) {
                count++;
            }
        }
        if (count === 1) {
            return newStr[i];
        }
    }
}

const str = "aabbc";
const result = findFirstNonRepeat(str);
console.log(result);