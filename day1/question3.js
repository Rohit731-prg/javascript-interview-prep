// Count vowels in a string
// Input: "hello" → Output: 2

function countVowels(str) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i of str) {
        if (vowels.includes(i)) count++;
    }

    return count;
}

const str = "hello";
const count = countVowels(str);
console.log(count);