// 1. Reverse a String
// Problem: Write a function to reverse a given string.
// Input: "asdf"
// Output: "fdsa"

function reverseString(str) {
    const nreStr = str.split("").reverse().join("");
    return nreStr
}

const str = "asdfghjkl";
const reverseStr = reverseString(str);
console.log(reverseStr);