console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosSuccess = document.querySelector('[data-js="success"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute('hidden', '');
}

function showTosError() {
  tosError.removeAttribute('hidden');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    return;
  }
  tosSuccess.removeAttribute('hidden');
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert('Form submitted');
  
});

tosCheckbox.addEventListener('click', event => {
  if (event.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
})

//Hide error message initially
tosError.setAttribute('hidden', '');
tosSuccess.setAttribute('hidden', '');

