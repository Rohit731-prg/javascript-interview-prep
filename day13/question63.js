// Print a triangle of stars
// Input: 3 → Output:\n*\n*\n**

function printStar(num) {
    for (let i = 1; i <= num; i++) {
        let line = "";

        // Print spaces
        for (let j = 1; j <= num - i; j++) {
            line += " ";
        }

        // Print stars
        for (let j = 1; j <= i; j++) {
            line += "*";
        }

        console.log(line);
    }
}

const num = 3;
printStar(num);
