type Combinable = number | string; // any types or literals
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  inputOne: Combinable,
  inputTwo: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (
    (typeof inputOne === "number" && typeof inputTwo === "number") ||
    resultType === "as-number"
  ) {
    result = +inputOne + +inputTwo;
  } else {
    result = inputOne.toString() + inputTwo.toString();
  }
  return result;
}

const combinedNumbers = combine(30, 26, "as-number");
console.log(combinedNumbers);

const combinedStringNumbers = combine("30", "26", "as-number");
console.log(combinedStringNumbers);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
