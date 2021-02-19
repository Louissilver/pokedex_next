import config from '../../config';

const URL_150_POKEMONS = `${config.URL_BACKEND_TOP}/pokedex/2/`;
const URL_POKEMON = `${config.URL_BACKEND_TOP}/pokemon`;

const ListarPokemons = () => {
    return fetch(URL_150_POKEMONS)
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
        })
        .then(json => {
            return json.pokemon_entries
        })
}

const DetalharPokemon = (id) => {
    return fetch(`${URL_POKEMON}/${id}`)
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
        })
        .then(json => {
            return json
        })
}

export { ListarPokemons, DetalharPokemon };