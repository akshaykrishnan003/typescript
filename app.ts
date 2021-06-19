/* 
########################################################################################
Objects
########################################################################################
 */

/* const personOne: { declaring object type
  name: string;
  age: number;
} */
const personOne = {
  name: "Tom",
  age: 15,
};

console.log(personOne.name);

/* 
########################################################################################
datatypes
########################################################################################
 */

function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let n1 = 5; // *type inference* typescript will automatically identify the type as number from the assigned value
const n2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

/* 
########################################################################################
typeof
########################################################################################
 */

add1(n1, n2, printResult, resultPhrase);
function add2(n1: number, n2: number) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect Input");
  }
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add2(n1, n2);
console.log(result);
