// Check if two strings are anagrams
// Input: "listen", "silent" → Output: true

function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const sortedStr1 = str1.split("").sort().join("")
    const sortedStr2 = str2.split("").sort().join("")

    return sortedStr1 === sortedStr2
}

const str1 = "listen";
const str2 = "silent";
const isAnagrams = checkAnagrams(str1, str2);
console.log(`${isAnagrams ? "are" : "are not"} anagrams`);