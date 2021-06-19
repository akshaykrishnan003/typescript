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
