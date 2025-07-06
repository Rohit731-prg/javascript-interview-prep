// Reverse each word in sentence
// Input: "abc def" → Output: "cba fed"

function reverseStringWord(str) {
    const newStr = str.split(" ");
    let reverseStr = [];
    reverseStr = newStr.map((word) => {
        return word.split("").reverse().join("");
    });
    return reverseStr.join(" ");
}

const str = "abc def";
const result = reverseStringWord(str);
console.log(result);