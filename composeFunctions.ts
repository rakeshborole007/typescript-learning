const compose = (...fns:any[]) => (arg: any) =>
  fns.reduceRight((acc, fn) => (fn ? fn(acc) : acc), arg)

const add = (num1: number) => (num2: number) => num1 + num2
const multiply = (num1: number) => (num2: number) => num1 * num2
const subtract = (num1: number) => (num2: number) => num1 - num2

const composedOperations = compose(add(5), multiply(2), subtract(3))

const compute = (arr: number[], initialNum = 0) =>
  arr.reduce((acc, val) => composedOperations(acc), initialNum)

console.log(compute([-10, 25, 55, 22], 6))
