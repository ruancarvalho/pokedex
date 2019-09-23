import {
  CLEAR_CURRENT_POKEMON,
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE
} from '../actions/pokemons'

const initialState = {
  collection: {},
  current: {},
  isFetched: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CURRENT_POKEMON:
      return {
        ...state,
        current: {},
        isFetched: true
      }

    case GET_POKEMON_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        current: {
          ...action.payload
        },
        isFetched: false
      }

    case GET_POKEMON_FAILURE:
      return {
        ...state,
        isFetched: false
      }

    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        collection: {
          ...state.collection,
          ...action.payload.results.reduce((accumulator, item) => {
            const { url } = item
            const id = url.substring(34, url.length - 1)

            return {
              ...accumulator,
              [id]: {
                id,
                ...item
              }
            }
          }, {})
        },
        isFetched: false
      }

    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        isFetched: false
      }

    default:
      return state
  }
}
