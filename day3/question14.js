// Count frequency of characters
// Input: "aabb" → Output: {a: 2, b: 2}

function countCharFrequency(str) {
    let frequency = {};
    const strArray = str.split('');

    for(let char of strArray) {
        if(frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

const inputString = "aabb";
const outputFrequency = countCharFrequency(inputString);
console.log(outputFrequency);