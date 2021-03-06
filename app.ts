/* 
########################################################################################
Function as type 
########################################################################################
 */
function addFunctionTwo(n1: number, n2: number) {
  return n1 + n2;
}

function printResultFunctionTwo(num: number): void {
  console.log("Result: " + num);
}

/* let combineValuesFunctionTwo: Function;
combineValuesFunctionTwo = add;
combineValuesFunctionTwo = printResult; works but defeats purpose
combineValuesFunctionTwo = 5; !!! Error !!!

console.log(combineValuesFunctionTwo(8, 8));
 */

let combineValuesFunctionTwo: (a: number, b: number) => number; // any fumction with parameter of types number and return type of number
combineValuesFunctionTwo = addFunctionTwo;
// combineValuesFunctionTwo = printResult; !!! Error !!! since number of argument dont match as well as the return type

console.log(combineValuesFunctionTwo(8, 8));
/* 
########################################################################################
Function and Return Type
########################################################################################
 */
function addFunctionOne(n1: number, n2: number) {
  // return type number is type inference'ed
  return n1 + n2;
}

function printResultFunctionOne(num: number): void {
  // returns nothing
  console.log("Result: " + num);
}

function retUndefinedFunctionOne(): undefined {
  // returns Undefined
  console.log("returns undefinde");
  return undefined;
}

printResultFunctionOne(addFunctionOne(5, 12));
retUndefinedFunctionOne();
console.log(printResultFunctionOne(addFunctionOne(5, 12))); // gives undefined
// undefined is a type
/* 
########################################################################################
Alias
########################################################################################
 */
type Combinable = number | string; // any types or literals
type ConversionDescriptor = "as-number" | "as-text";

function combineThree(
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

const combinedNumbersThree = combineThree(30, 26, "as-number");
console.log(combinedNumbersThree);

const combinedStringNumbersThree = combineThree("30", "26", "as-number");
console.log(combinedStringNumbersThree);

const combinedNamesThree = combineThree("Max", "Anna", "as-text");
console.log(combinedNamesThree);
/* 
########################################################################################
Literals
########################################################################################
 */
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

function combineTwo(
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

const combinedNumbersTwo = combineTwo(30, 26, "as-number");
console.log(combinedNumbersTwo);

const combinedStringNumbersTwo = combineTwo("30", "26", "as-number");
console.log(combinedStringNumbersTwo);

const combinedNamesTwo = combineTwo("Max", "Anna", "as-text");
console.log(combinedNamesTwo);
/* 
########################################################################################
Union Types
########################################################################################
 */
//run time types check are not always needed

function combineOne(inputOne: number | string, inputTwo: number | string) {
  let result;
  if (typeof inputOne === "number" && typeof inputTwo === "number") {
    result = inputOne + inputTwo;
  } else {
    result = inputOne.toString() + inputTwo.toString();
  }
  return result;
}

const combinedNumbersOne = combineOne(30, 26);
console.log(combinedNumbersOne);

const combinedNamesOne = combineOne("Max", "Anna");
console.log(combinedNamesOne);
/* 
########################################################################################
Any Type
########################################################################################
 */
// Any kind of value, no specific type assignment to variable

//try to avoid at max
let anyArray: any[]; //array of any type
anyArray = ["one", 2, 3.0, "FOUR"];
/* 
########################################################################################
Enum
########################################################################################
 */
// Automatically enumerated constant identifier
// human readable identifiers
// custom type

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/* 
its also possible to assign custom values 
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "author",
} */

const personFour = {
  name: "Tom",
  age: 15,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (personFour.role === Role.ADMIN) {
  console.log(personFour.name + " is admin");
}
/* 
########################################################################################
Tuple
########################################################################################
 */
const personThree: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  // *tuple* role will have fixed size of two, first value will be number and second one will be string
} = {
  name: "Tom",
  age: 15,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

/* this will messup role if
const personThree = {
    name: "Tom",
    age: 15,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
  };
personThree.role[1] = 10; !!! Error !!!
 */
// personThree.role.push("admin"); push will mess up tuple

/* 
########################################################################################
Arrays
########################################################################################
 */

const personTwo = {
  name: "Tom",
  age: 15,
  hobbies: ["Sports", "Cooking"],
};

// let favoriteActivitiesOne: any[]; can have a array of any type
let favoriteActivitiesOne: string[];
favoriteActivitiesOne = ["sports"];
// favoriteActivitiesOne = ["sports", 1]; ** will give error

console.log(personTwo.name);

for (const hobby of personTwo.hobbies) {
  console.log(hobby.toUpperCase()); //since hobby is string as we set it in the object
}
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
