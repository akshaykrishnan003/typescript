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
