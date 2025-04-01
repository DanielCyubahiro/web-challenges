import {useEffect, useState} from 'react';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0`);
  const [data, setData] = useState({});
  useEffect(() => {
    async function loadPokemon(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPokemon(data.results);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon(url);
  }, [url]);

  const handleNextPage = () => {
    setUrl(data.next !== null ? data.next : url);
  };
  const handlePreviousPage = () => {
    setUrl(data.previous !== null ? data.previous : url);
  };

  return (
      <main>
        <button type="button" onClick={handlePreviousPage}>Previous Page</button>
        <button type="button" onClick={handleNextPage}>Next Page</button>
        <ul>
          {pokemon.map(({name}) => (
              <li key={name}>{name}</li>
          ))}
        </ul>
      </main>
  );
}
