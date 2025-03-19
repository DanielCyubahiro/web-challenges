console.clear();

const url = 'https://swapi.py4e.com/api/people';

async function fetchData() {
  const response = await fetch(url);
  return await response.json();
}

fetchData().then(r => {
  console.log(r);
  console.log(r.results);
  console.log(r.results.find(item => item.name === 'R2-D2').eye_color);
});
