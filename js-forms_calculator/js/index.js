console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));

  let result;
  console.log(formData);

  // --v-- write your code here --v--
  if (formData.operator === 'addition') {
    result = add(Number(formData.numberA),
        Number(formData.numberB));
  } else if (formData.operator === 'subtraction') {
    result = subtract(Number(formData.numberA),
        Number(formData.numberB));
  } else if (formData.operator === 'multiplication') {
    result = multiply(Number(formData.numberA),
        Number(formData.numberB));
  } else {
    result = divide(Number(formData.numberA),
        Number(formData.numberB));
  }

// --^-- write your code here --^--

  resultOutput.textContent = result;
})
;
