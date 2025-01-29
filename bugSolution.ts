function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function handleError(operation: () => number): number {
  try {
    return operation();
  } catch (error) {
    console.error("Error:", error.message);
    return 0; // Or handle the error appropriately
  }
}

let result = add(5, 3); // 8
result = subtract(10, 4); // 6
result = multiply(7, 2); // 14
result = handleError(() => divide(15, 0)); // Handles the error