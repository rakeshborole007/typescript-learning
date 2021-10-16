type FixedLengthNumber<Length> = number & {
  readonly FixedLengthNumber: unique symbol // this is the phantom type
};
const isFixedLengthNumber = <Length extends number>(
  fixedNumber: number,
  length: Length
): fixedNumber is FixedLengthNumber<Length> => fixedNumber.toString().length == length;
    
// type constructor function
const fixedLengthNumber = < Length extends number>(
  input: number,
  length: Length
): FixedLengthNumber<Length> => {
  if (typeof input !== "number") {
    throw new Error("invalid input");
  }
    
  if (!isFixedLengthNumber(input, length)) {
    throw new Error("input is not fixed length");
  }
    
  return input; // the type of input here is now FixedLengthNumber<Length>
};

// Now we can use our type constructor function
const myNumber = fixedLengthNumber(2021, 4,) // myString has type FixedLengthNumber<4>

// the type constructor fails if the input is invalid
fixedLengthNumber(21, 2) // Error: input is not of specified length

// The phantom type prevents us from assigning FixedLengthNumber manually like this:
// const a: FixedLengthNumber<10> = 1234567890 // Type '1234567890' is not assignable to type { FixedLengthNumber: unique symbol }
  
