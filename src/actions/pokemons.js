import { RSAA } from 'redux-api-middleware'

export const CLEAR_CURRENT_POKEMON = 'CLEAR_CURRENT_POKEMON'

export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST'
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS'
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE'

export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST'
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE'

export const getPokemon = (id = '') => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: `https://pokeapi.co/api/v2/pokemon/${id}`,
      method: 'GET',
      types: [
        'GET_POKEMON_REQUEST',
        'GET_POKEMON_SUCCESS',
        'GET_POKEMON_FAILURE'
      ]
    }
  })
}

export const getPokemons = (options = {}) => dispatch => {
  const { limit = 784 } = options

  return dispatch({
    [RSAA]: {
      endpoint: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
      method: 'GET',
      types: [
        'GET_POKEMONS_REQUEST',
        'GET_POKEMONS_SUCCESS',
        'GET_POKEMONS_FAILURE'
      ]
    }
  })
}
