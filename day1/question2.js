// Check if a string is a palindrome
// Input: "racecar" → Output: true

function checkPalindrom(str) {
    let str2 = str.split("").reverse().join("");
    if(str === str2) return true;
    else return false
}

const str1 = "racecar";
const str2 = "hello";
const isPalindrom1 = checkPalindrom(str1);
const isPalindrom2 = checkPalindrom(str2);
console.log(`1st string is ${isPalindrom1 ? "a" : "not a"} palindrome`);
console.log(`2nd string is ${isPalindrom2 ? "a" : "not a"} palindrome`);