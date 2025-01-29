# TypeScript Runtime Error: Division by Zero

This repository demonstrates a common error in TypeScript: a runtime error that is not caught by the type system.  The type system ensures that the parameters passed to the functions are numbers, but it doesn't prevent runtime errors like division by zero. The `bug.ts` file contains the buggy code, while `bugSolution.ts` demonstrates how to improve the error handling.

## How to reproduce

1. Clone the repository
2. Compile the code using `tsc bug.ts`
3. Run the compiled JavaScript using `node bug.js`

You will see that the code throws an error when it tries to divide by zero.

## Solution

The solution involves using try-catch blocks to handle potential runtime errors in a more graceful manner. Refer to `bugSolution.ts` for a solution.