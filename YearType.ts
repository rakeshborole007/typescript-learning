type Year<Length> = number & {
  readonly Year: unique symbol // this is the phantom type
};
const isYear = <Length extends number=4>(
  year: number,
  length: Length
): year is Year<Length> => year.toString().length == 4;
    
// type constructor function
const year = < Length extends number>(
  input: number
): Year<Length> => {
  if (typeof input !== "number") {
    throw new Error("invalid input");
  }
    
  if (!isYear(input, length)) {
    throw new Error("input is not of length=4");
  }
    
  return input; // the type of input here is now Year<Length>
};

// Now we can use our type constructor function
const myYear = year(2021) // myString has type Year<4>

// the type constructor fails if the input is invalid
year(21) // Error: input is not of specified length

// The phantom type prevents us from assigning Year manually like this:
// const a: Year<10> = 1234567890 // Type '1234567890' is not assignable to type { Year: unique symbol }
  
