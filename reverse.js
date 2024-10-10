var input = process.argv[2];

if (input) {
const reversed = reverse(input);
console.log(reversed);

//Function test
const expectedOutput = 'olleh';
if (input === 'hello' && reversed === expectedOutput) {
  console.log("Test passed: The string was reversed correctly.");
} else {
  console.log(`Test failed: Expected ${expectedOutput} but got ${reversed}`);
}
}

function reverse(original) {
  return original.split('').reverse().join('');
}
