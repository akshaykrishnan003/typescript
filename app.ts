function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

/* let combineValues: Function;
combineValues = add;
combineValues = printResult; works but defeats purpose
combineValues = 5; !!! Error !!!

console.log(combineValues(8, 8));
 */

let combineValues: (a: number, b: number) => number; // any fumction with parameter of types number and return type of number
combineValues = add;
// combineValues = printResult; !!! Error !!! since number of argument dont match as well as the return type

console.log(combineValues(8, 8));
