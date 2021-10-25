type MaxValueNumberType<Max> = number & {
  readonly MaxValueNumberType: unique symbol // this is the phantom type
};
const isMaxValueNumberType = <Max extends number>(
  num: number,
  max: Max
): num is MaxValueNumberType<Max> => num <= max;
    
// type constructor function
const MaxValueNumber = < Max extends number>(
  input: number,
  max: Max
): MaxValueNumberType<Max> => {
  if (typeof input !== "number") {
    throw new Error("invalid input");
  }
    
  if (!isMaxValueNumberType(input, max)) {
    throw new Error("input is not fixed length");
  }    
  return input; // the type of input here is now MaxValueNumberType<Max>
};

// Now we can use our type constructor function
const myNumber = MaxValueNumber(54, 52) // myString has type FixedLengthNumber<4>
console.log(myNumber)
  
