// Find the longest word in a sentence
// Input: "I love programming" → Output: "programming"

function findLongestWord(str) {
    const newStr = str.split(" ");
    let longestWord = newStr[0];

    for (let word of newStr) {
        if (longestWord < word) longestWord = word;
    }

    return longestWord;
}

const str = "I love programming";
const longestWord = findLongestWord(str);
console.log(longestWord);