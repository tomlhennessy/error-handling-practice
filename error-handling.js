// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Error: ", error.message);
    } else {
      throw error; // rethrow if it's not the expected error
    }
  }
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
function sayName(name) {
  if (typeof name !== 'string') {
    throw new TypeError("Invalid name! Must be a string!");
  }
  console.log(name);
}

// tests
try {
  sayName("Alex");
} catch (error) {
  console.log(error.message);
}

try {
  sayName(1); // this should trigger the error
} catch (error) {
  console.log(error.message);
}

// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
