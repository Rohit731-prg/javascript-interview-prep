// Capitalize the first letter of each word
// Input: "hello world" → Output: "Hello World"

function Capitalize(str) {
    const newStr = str.split(" ");
    let newArr = []

    for (let word of newStr) {
        word = word[0].toUpperCase() + word.slice(1);
        newArr.push(word);
    }
    return newArr.join(" ");
}

const str = "hello world";
const capitalizeStr = Capitalize(str);
console.log(capitalizeStr);