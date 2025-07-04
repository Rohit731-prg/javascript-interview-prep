// Replace all spaces with hyphens
// Input: "a b c" → Output: "a-b-c"

function relaceSpace(str) {
    const newStr = str.split(" ");
    return newStr.join("-");
}

const str = "a b c";
const newStr = relaceSpace(str);
console.log(newStr);