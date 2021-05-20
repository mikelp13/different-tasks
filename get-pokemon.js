const showPokemon = pokemon => {
  const body = document.querySelector('body');
  const image = document.createElement('img');
  image.src = pokemon.sprites.front_default;

  body.appendChild(image);
};

const pokemonList = [
  'https://pokeapi.co/api/v2/pokemon/1',
  'https://pokeapi.co/api/v2/pokemon/10',
  'https://pokeapi.co/api/v2/pokemon/13',
  'https://pokeapi.co/api/v2/pokemon/45',
  'https://pokeapi.co/api/v2/pokemon/64',
  'https://pokeapi.co/api/v2/pokemon/78',
  'https://pokeapi.co/api/v2/pokemon/3',
  'https://pokeapi.co/api/v2/pokemon/21',
];

const getPokemon = pokemonUrl =>
  fetch(pokemonUrl).then(res => res.json());

(async () => {
  for (let i = 0; i < pokemonList.length; i += 1) {
    const currentPokemonUrl = pokemonList[i];
    const currentPokemon = await getPokemon(currentPokemonUrl);
    showPokemon(currentPokemon);
  }
})();
