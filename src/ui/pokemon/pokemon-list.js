import React from 'react'
import { useSelector } from 'react-redux'
import Pokemon from './cmp-pokemon'

const PokemonList = props => {
  // get all pokemons from store
  const collection = useSelector(state => state.pokemons.collection)

  let pokemonsCards = props.items.map(id => {
    const pokemon = collection[id]

    return (
      <li
        key={pokemon.id}
        className="pokemons__item"
        onClick={props.onItemClick.bind(this, pokemon.id)}
      >
        <Pokemon pokemon={pokemon} />
      </li>
    )
  })

  if (!pokemonsCards.length) {
    return <small>No Pokemons Found... :(</small>
  }

  return <ul className="pokemons">{pokemonsCards}</ul>
}

export default PokemonList
