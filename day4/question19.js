// Remove all non-alphabet characters
// Input: "he!@#llo123" → Output: "hello"

function removeNonAlphabet(str) {
    const newStr = str.split("");
    let result = [];

    for (let i of newStr) {
        if (i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z') {
            result.push(i);
        }
    }
    return result.join("");
}

const str = "he!@#llo123";
const result = removeNonAlphabet(str);
console.log(result);