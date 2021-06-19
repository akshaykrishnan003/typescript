/* 
use case
function combine(
  inputOne: number | string,
  inputTwo: number | string,
  resultType: string
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
 //   if (resultType === "as-number") {
 //   return +result;
 // } else {
 //   return result.toString();
 // }
}

const combinedNumbers = combine(30, 26, "as-number");
console.log(combinedNumbers);

const combinedStringNumbers = combine("30", "26", "as-number");
console.log(combinedStringNumbers);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
 */

function combine(
  inputOne: number | string,
  inputTwo: number | string,
  resultType: "as-number" | "as-text"
) {
  let result;
  /* if (
    (typeof inputOne === "number" && typeof inputTwo === "number") ||
    resultType === "as-numb" !!! Error !!!
  ) { */
  if (
    (typeof inputOne === "number" && typeof inputTwo === "number") ||
    resultType === "as-number"
  ) {
    result = +inputOne + +inputTwo;
  } else {
    result = inputOne.toString() + inputTwo.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedNumbers = combine(30, 26, "as-number");
console.log(combinedNumbers);

const combinedStringNumbers = combine("30", "26", "as-number");
console.log(combinedStringNumbers);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
