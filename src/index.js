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
  // return parseInt(data, 10) || 0;
  let finalNumber = 0;
  //Integer dictionary to get the value fron string
  const dictInt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  //Iterate the string
  for (let i = 0; i < data.length; i++) {
    let singleChar = data[i];
    //Get the character
    let val = dictInt[singleChar];
    //If it found NAN it will break the loop
    if (val === undefined) {
      break;
    }
    //creating the number
    finalNumber = finalNumber + val;
    finalNumber = finalNumber * 10;
  }
  finalNumber = finalNumber / 10;
  return finalNumber;
};

module.exports = stringToNumber;
