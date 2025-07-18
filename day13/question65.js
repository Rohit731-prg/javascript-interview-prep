// Check if a number is a power of 2
// Input: 8 → Output: true

function ispowerOf2(num) {
    if (num === 1) return true;
    if (num % 2 !== 0) return false;
    return ispowerOf2(num / 2);
}

const num = 8;
console.log(ispowerOf2(num));