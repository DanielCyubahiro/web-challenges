console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

let answer;
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener('click', () => {
    answer = operand1 + operand2;
    console.log(answer);
})
subtractButton.addEventListener('click', () => {
    answer = operand1 - operand2;
    console.log(answer);
})
multiplyButton.addEventListener('click', () => {
    answer = operand1 * operand2;
    console.log(answer);
})
divideButton.addEventListener('click', () => {
    answer = operand1 / operand2;
    console.log(answer);
})
exponentButton.addEventListener('click', () => {
    answer = operand1 ** operand2;
    console.log(answer);
})
moduloButton.addEventListener('click', () => {
    answer = operand1 % operand2;
    console.log(answer);
})

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseFirstOperandByOne = document.querySelector('[data-js="increase-by-one"]');
const increaseFirstOperandByFive = document.querySelector('[data-js="increase-by-five"]');
const decreaseFirstOperandByOne = document.querySelector('[data-js="decrease-by-one"]');
const decreaseFirstOperandByFive = document.querySelector('[data-js="decrease-by-five"]');
const multiplyFirstOperandByTwo = document.querySelector('[data-js="multiply-by-two"]');
const divideFirstOperandByTwo = document.querySelector('[data-js="divide-by-two"]');

increaseFirstOperandByOne.addEventListener('click', () => {
    operand1 += 1;
    console.log(operand1);
})
increaseFirstOperandByFive.addEventListener('click', () => {
    operand1 += 5;
    console.log(operand1);
})
decreaseFirstOperandByOne.addEventListener('click', () => {
    operand1 -= 1;
    console.log(operand1);
})
decreaseFirstOperandByFive.addEventListener('click', () => {
    operand1 -= 5;
    console.log(operand1);
})
multiplyFirstOperandByTwo.addEventListener('click', () => {
    operand1 *= 2;
    console.log(operand1);
})
divideFirstOperandByTwo.addEventListener('click', () => {
    operand1 /= 2;
    console.log(operand1);
})


// --^-- write your code here --^--
