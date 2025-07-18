// Generate a random number between 1 and 10
// Output: 7 (example)

const rndomNumber = () => {
   return Math.floor(Math.random() * 10 + 1);
}

const result = rndomNumber();
console.log(result);