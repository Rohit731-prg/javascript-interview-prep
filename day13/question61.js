// Find LCM of two numbers
// Input: 4, 5 → Output: 20

function findLCM(num1, num2) {
    let lcm = 0;

    for (let i = 1; i <= num1 * num2; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            lcm = i;
            break;
        }
    }

    return lcm;
}

const num1 = 4;
const num2 = 5;
const result = findLCM(num1, num2);
console.log(result);