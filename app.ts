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
