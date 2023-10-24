# Hella Loops Part 01
# Problem 01

### Problem Statement

You are tasked with creating a function named `getEvenNumbers` that returns an array of even numbers between the given `start` and `stop` values, inclusive.

Your `getEvenNumbers` function should accept two parameters:
1. `start`: an integer representing the starting number.
2. `stop`: an integer representing the ending number.

The function should return an array of integers representing all the even numbers in the specified range.

Here are some examples:

- `getEvenNumbers(2, 6)` should return `[2, 4, 6]` because all the even numbers between 2 and 6 (inclusive) are 2, 4, and 6.

{Try It!}(node .guides/getEvenNumbers/try-it-01.js)

- `getEvenNumbers(5, 11)` should return `[6, 8, 10]` because all the even numbers between 5 and 11 (inclusive) are 6, 8, and 10.

{Try It!}(node .guides/getEvenNumbers/try-it-02.js)

**Constraints:**
- The input `start` and `stop` are integers.

### Solution

node .guides/secure/getEvenNumbersTest.js
    
# Problem 02

### Problem Statement

You are tasked with creating a function named `getOddNumbers` that returns an array of odd numbers between the given `start` and `stop` values, inclusive.

Your `getOddNumbers` function should accept two parameters:
1. `start`: an integer representing the starting number.
2. `stop`: an integer representing the ending number.

The function should return an array of integers representing all the odd numbers in the specified range.

Here are some examples:

- `getOddNumbers(1, 7)` should return `[1, 3, 5, 7]` because all the odd numbers between 1 and 7 (inclusive) are 1, 3, 5, and 7.

{Try It!}(node .guides/getOddNumbers/try-it-01.js)

- `getOddNumbers(4, 10)` should return `[5, 7, 9]` because all the odd numbers between 4 and 10 (inclusive) are 5, 7, and 9.

{Try It!}(node .guides/getOddNumbers/try-it-02.js)

**Constraints:**
- The input `start` and `stop` are integers.

### Solution

node .guides/secure/getOddNumbersTest.js


# Problem 03

### Problem Statement

You are tasked with creating a function named `getSquareNumbers` that returns an array of numbers between the given `start` and `stop` values where each number is a perfect square (e.g., 1, 4, 9, 16, ...).

Your `getSquareNumbers` function should accept two parameters:
1. `start`: an integer representing the starting number.
2. `stop`: an integer representing the ending number.

The function should return an array of integers representing all the perfect square numbers in the specified range.

Here are some examples:

- `getSquareNumbers(1, 20)` should return `[1, 4, 9, 16]` because all the perfect squares between 1 and 20 (inclusive) are 1, 4, 9, and 16.

{Try It!}(node .guides/getSquareNumbers/try-it-01.js)

- `getSquareNumbers(10, 50)` should return `[16, 25, 36, 49]` because all the perfect squares between 10 and 50 (inclusive) are 16, 25, 36, and 49.

{Try It!}(node .guides/getSquareNumbers/try-it-02.js)

**Constraints:**
- The input `start` and `stop` are integers.

### Solution

node .guides/secure/getSquareNumbersTest.js

# Problem 04

### Problem Statement

You are tasked with creating a function named `getRange` that returns an array of numbers starting from 0 up to (but not including) the `stop` value.

Your `getRange` function should accept a single parameter:
1. `stop`: an integer representing the ending number.

The function should return an array of integers representing the sequence of numbers from 0 to `stop` - 1.

Here are some examples:

- `getRange(5)` should return `[0, 1, 2, 3, 4]` because the numbers from 0 up to (but not including) 5 are 0, 1, 2, 3, and 4.

{Try It!}(node .guides/getRange/try-it-01.js)

- `getRange(3)` should return `[0, 1, 2]` because the numbers from 0 up to (but not including) 3 are 0, 1, and 2.

{Try It!}(node .guides/getRange/try-it-02.js)

**Constraints:**
- The input `stop` is a non-negative integer.

### Solution

node .guides/secure/getRangeTest.js

# Problem 06

### Problem Statement

You are tasked with creating a function named `getRangeWithStartAndStep` that returns an array of numbers starting from the `start` value, incrementing by the `step` value, and ending before the `stop` value.

Your `getRangeWithStartAndStep` function should accept three parameters:
1. `start`: an integer representing the starting number.
2. `stop`: an integer representing the ending number.
3. `step`: an integer representing the interval between numbers.

The function should return an array of integers representing the sequence of numbers based on the given parameters.

Here are some examples:

- `getRangeWithStartAndStep(2, 10, 2)` should return `[2, 4, 6, 8]` because starting from 2, incrementing by 2, and ending before 10 results in 2, 4, 6, and 8.

{Try It!}(node .guides/getRangeWithStartAndStep/try-it-01.js)

- `getRangeWithStartAndStep(3, 20, 5)` should return `[3, 8, 13, 18]` because starting from 3, incrementing by 5, and ending before 20 results in 3, 8, 13, and 18.

{Try It!}(node .guides/getRangeWithStartAndStep/try-it-02.js)

**Constraints:**
- The inputs `start`, `stop`, and `step` are integers.
- `step` is greater than 0.

### Solution

node .guides/secure/getRangeWithStartAndStepTest.js

# Problem 07

### Problem Statement

You are tasked with creating a function named `getExponentiations` that returns an array of numbers. Each number in the array should be the result of raising the `start` value (which increments by the `step` value) to the power of `exponent`, with the sequence ending before reaching the `stop` value.

Your `getExponentiations` function should accept four parameters:
1. `start`: an integer representing the starting number.
2. `stop`: an integer representing the ending number.
3. `step`: an integer representing the interval between numbers.
4. `exponent`: an integer representing the power to which each number should be raised.

The function should return an array of integers representing the sequence of numbers based on the given parameters.

Here are some examples:

- `getExponentiations(2, 10, 2, 2)` should return `[4, 16, 36, 64]` because raising 2, 4, 6, and 8 to the power of 2 results in 4, 16, 36, and 64 respectively.

{Try It!}(node .guides/getExponentiations/try-it-01.js)

- `getExponentiations(1, 5, 1, 3)` should return `[1, 8, 27, 64]` because raising 1, 2, 3, and 4 to the power of 3 results in 1, 8, 27, and 64 respectively.

{Try It!}(node .guides/getExponentiations/try-it-02.js)

**Constraints:**
- The inputs `start`, `stop`, `step`, and `exponent` are integers.
- `step` is greater than 0.

### Solution

node .guides/secure/getExponentiationsTest.js



## Submission:

Once you have completed all the functions, make sure to commit your changes and push to the designated repository.

Best of luck, and happy coding! 🚀