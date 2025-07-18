// Check if year is a leap year
// Input: 2024 → Output: true

function isLeepYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const year = 2024;
console.log(isLeepYear(year));