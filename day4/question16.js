// Convert string to camelCase
// Input: "hello world" → Output: "helloWorld"

function convertCamelcase(str) {
    const newStr = str.split(" ");
    const camelCaseStr = newStr.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return camelCaseStr.join("");
}

const str = "hello world";
const result = convertCamelcase(str);
console.log(result);