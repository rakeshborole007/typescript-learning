type FixedLengthString<Length> = string & {
  readonly FixedLengthString: unique symbol // this is the phantom type
};
// This is a type guard function which can be used to assert that a string
// is of type StringOfLength<Min,Max>
const isFixedLengthString = <Length extends number>(
  str: string,
  length: Length
): str is FixedLengthString<Length> => str.length == length;
    
// type constructor function
const fixedLengthString = < Length extends number>(
  input: unknown,
  length: Length
): FixedLengthString<Length> => {
  if (typeof input !== "string") {
    throw new Error("invalid input");
  }
    
  if (!isFixedLengthString(input, length)) {
    throw new Error("input is not between specified min and max");
  }
    
  return input; // the type of input here is now FixedLengthString<Length>
};

// Now we can use our type constructor function
const myString = fixedLengthString('2021', 4,) // myString has type StringOfLength<4>

// the type constructor fails if the input is invalid
fixedLengthString('aaaaa', 5) // Error: input is not between specified min and max

// The phantom type prevents us from assigning StringOfLength manually like this:
// const a: StringOfLength<0, 10> = 'hello' // Type '"hello"' is not assignable to type { StringOfLength: unique symbol }
  
