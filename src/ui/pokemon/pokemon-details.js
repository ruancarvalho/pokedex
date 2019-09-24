import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CLEAR_CURRENT_POKEMON, getPokemon } from '../../actions/pokemons'

const PokemonDetails = ({ id }) => {
  const dispatch = useDispatch()
  const { current } = useSelector(state => state.pokemons)

  useEffect(
    () => {
      if (id) {
        dispatch(getPokemon(id))
      }

      return function cleanup() {
        dispatch({ type: CLEAR_CURRENT_POKEMON })
      }
    },
    [id, dispatch]
  )

  if (!current.hasOwnProperty('id')) return null

  const baseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
  const pid = current.id.toString().padStart(3, '0')

  return (
    <div className="pokemon__details">
      <header>
        <h2 className="pokemon__name">
          {current.name}
          <span className="pokemon__id">No. {pid}</span>
        </h2>
      </header>
      <section className="pokemon__image">
        <img src={`${baseUrl}${pid}.png`} alt={current.name} />
      </section>
      <p>{current.base_experience}</p>
      <p>{current.height}</p>
      <p>{current.order}</p>
      <p>{current.weight}</p>
    </div>
  )
}

export default PokemonDetails
