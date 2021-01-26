// Convert a string to an integer without using any built-in functions of the programming
// language you choose. You are welcome to use any mathematical operators.
// ● Add all test cases that you’d like to write to ensure correctness of your code.
// ● Pick a language of your choice. We care more about how you solve the problem
// than the language you choose
// ● Highlight limitations of your solution
// ● Sprinkle comments generously, where required

// “42” → 42
// ● “0” → 0
// ● “42a” → 42 [Upto Valid num]
// ● “42a35” → 42 [Upto Valid num]
// ● “abc42” → 0
// ● Extra Credit: “-42” → -42

const stringToNumber = (data) => {
  return parseInt(data, 10) || 0;
};

module.exports = stringToNumber;
