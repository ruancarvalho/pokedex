import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CLEAR_CURRENT_POKEMON, getPokemon } from '../../actions/pokemons'

const PokemonDetails = ({ id }) => {
  const dispatch = useDispatch()
  const { current } = useSelector(state => state.pokemons)

  useEffect(
    () => {
      dispatch(getPokemon(id))

      return function cleanup() {
        dispatch({ type: CLEAR_CURRENT_POKEMON })
      }
    },
    [getPokemon, dispatch]
  )

  return (
    <div className="pokemon__details">
      <p>{current.id}</p>
      <p>{current.name}</p>
      <p>{current.base_experience}</p>
      <p>{current.height}</p>
      <p>{current.order}</p>
      <p>{current.weight}</p>
    </div>
  )
}

export default PokemonDetails
