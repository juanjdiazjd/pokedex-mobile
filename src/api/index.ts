import createPokemon from './services/pokemon';

const pokemonApi = {
  pokemonServices: createPokemon(),
};

export default pokemonApi;
