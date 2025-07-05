// Repeat a string n times
// Input: "hi", 3 → Output: "hihihi"

function repeatString(str, n) {
    const newStr = [];

    Array.from({ length: n }).forEach(() => {
        newStr.push(str);
    });

    return newStr.join('');
}

const inputString = "hi";
const repeatCount = 3;

const outputString = repeatString(inputString, repeatCount);
console.log(outputString);