console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

//Set default values
let pizzaSize1 = 24;
let pizzaSize2 = 24;

const setPizzaSize1 = (size) => {
  pizzaSize1 = size;
};

const setPizzaSize2 = (size) => {
  pizzaSize2 = size;
};

pizzaInput1.addEventListener('input', () => {
  // Write your code here
  pizzaSize1 = pizzaInput1.value;
  setPizzaSize1(pizzaSize1);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener('input', () => {
  // Write your code here
  pizzaSize2 = pizzaInput2.value;
  setPizzaSize2(pizzaSize2);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here
const calculatePizzaGain = (diameter1, diameter2) => {
  const area1 = (diameter1 / 2) * Math.PI;
  const area2 = (diameter2 / 2) * Math.PI;
  const pizzaGain = (area2 - area1) / area1 * 100;
  output.textContent = Math.round(pizzaGain).toString();
};

calculatePizzaGain(pizzaSize1, pizzaSize2);

// Task 2: Define the function `updatePizzaDisplay` here
const updatePizzaDisplay = (pizzaElement, newSize) => {
  pizzaElement.style.width = (newSize / 24 * 100).toString() + 'px';
};

updatePizzaDisplay(pizza1, pizzaSize1);
updatePizzaDisplay(pizza2, pizzaSize2);
// Task 3: Define the function `updateOutputColor` here
const updateOutputColor = (size1, size2) => {
  if (size1 > size2) {
    outputSection.style.backgroundColor = 'var(--red)';
  } else if (size1 < size2) {
    outputSection.style.backgroundColor = 'var(--green)';
  }
};
updateOutputColor(pizzaSize1, pizzaSize2);
