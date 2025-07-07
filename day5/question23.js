// Convert string to snake_case
// Input: "Hello World" → Output: "hello_world"

function convertStr(str) {
    return str.toLowerCase().split(" ").join("_");
}

const str = "Hello World";
const result = convertStr(str);
console.log(result);