//run time types check are not always needed

function combine(inputOne: number | string, inputTwo: number | string) {
  let result;
  if (typeof inputOne === "number" && typeof inputTwo === "number") {
    result = inputOne + inputTwo;
  } else {
    result = inputOne.toString() + inputTwo.toString();
  }
  return result;
}

const combinedNumbers = combine(30, 26);
console.log(combinedNumbers);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
