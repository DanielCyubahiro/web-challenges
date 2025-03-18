import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  //Part 1
  const foundCountry = countries.find((country) => country.name.toLowerCase() === searchString.toLowerCase());
  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }

  //Part 2
  const foundCountries = countries.filter(country => country.name.startsWith(searchString));
  foundCountries.forEach(country => {
    if (country) {
      const countryElement = Country(country);
      container.append(countryElement);
    }
  })
});
