console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStarts = 0) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = '';

  // --v-- write or modify code below this line --v--
  for (let star = 1; star <= 5; star++) {
    const image = document.createElement('img');
    image.src = star <= filledStarts
        ? 'assets/star-filled.svg'
        : 'assets/star-empty.svg';

    image.addEventListener('click', () => {
      renderStars(star);
    });
    starContainer.appendChild(image);
  }
  // --^-- write or modify code above this line --^--
}

renderStars(0);
