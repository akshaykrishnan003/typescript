function add(n1: number, n2: number) {
  // return type number is type inference'ed
  return n1 + n2;
}

function printResult(num: number): void {
  // returns nothing
  console.log("Result: " + num);
}

function retUndefined(): undefined {
  // returns Undefined
  console.log("returns undefinde");
  return undefined;
}

printResult(add(5, 12));
retUndefined();
console.log(printResult(add(5, 12))); // gives undefined
// undefined is a type
