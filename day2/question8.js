// Convert string to title case
// Input: "the great gatsby" → Output: "The Great Gatsby"

function titleCase(str) {
    const newStr = str.split(" ");
    let result = [];
    for (let word of newStr) {
        word = word[0].toUpperCase() + word.slice(1);
        result.push(word);
    }

    return result.join(" ");
}

const str = "the great gatsby";
const newStr = titleCase(str);
console.log(newStr);