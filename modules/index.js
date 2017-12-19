import 'normalize-css';
import { searchPokemon } from './data';
import { appendHtml } from './html';
searchPokemon('https://pokeapi.co/api/v2/pokemon/', data => {
    const pokemonData = data;
    appendHtml(pokemonData);
});