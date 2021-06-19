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
