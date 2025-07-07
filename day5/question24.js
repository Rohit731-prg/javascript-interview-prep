// Shift each letter forward by 1 (Caesar cipher)
// Input: "abc" → Output: "bcd"

function caesarCipher(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let char of str) {
        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char);
            let newIndex = (index + 1) % alphabet.length; // Wrap around to the start
            result += alphabet[newIndex];
        } else {
            result += char; // Keep non-alphabet characters unchanged
        }
    }

    return result

}

const str = "def";
const result = caesarCipher(str);
console.log(result);