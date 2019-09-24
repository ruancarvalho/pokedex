import React, { Fragment, useEffect, useState } from 'react'
import hardtack from 'hardtack'
import Modal from 'react-modal'
import Pokemon from '../pokemon/cmp-pokemon'
import PokemonDetails from '../pokemon/pokemon-details'
import Search from '../search/cmp-search'

const Page = (props = {}) => {
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [pokemonsIds, setPokemonsIds] = useState([])
  const [searchString, setSearchString] = useState('')
  const [showModal, setShowModal] = useState(false)
  const { getPokemons } = props

  const handleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim()
    const { collection } = props

    hardtack.set('searchString', value, {
      maxAge: '31536000'
    })

    let found = []

    // do the search only after 3 letters typed
    if (value !== '' && value.length > 2) {
      found = Object.keys(collection)
        .filter(pokemonId => {
          const pokemon = collection[pokemonId]
          return pokemon.name.includes(value)
        })
        .slice(0, 4)
    }

    setPokemonsIds(found)
    setSearchString(value)
  }

  const handlePokemonClick = id => {
    setCurrentPokemon(id)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setCurrentPokemon(null)
    setShowModal(false)
  }

  const pokemons = pokemonsIds.map(id => {
    const pokemon = props.collection[id]

    return (
      <li
        key={pokemon.id}
        className="pokemons__item"
        onClick={handlePokemonClick.bind(this, pokemon.id)}
      >
        <Pokemon pokemon={pokemon} />
      </li>
    )
  })

  useEffect(
    () => {
      getPokemons().then(action => {
        if (action.error) {
          return setError(action.payload.message)
        }
      })
    },
    [getPokemons]
  )

  Modal.setAppElement('#root')

  return (
    <Fragment>
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__logo">
          <h1>Pokedex</h1>
        </div>
        <div className="page__search">
          <Search onChange={handleSearch} value={searchString} />
        </div>
        {props.isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="pokemons">{pokemons}</ul>
        )}
      </div>

      <Modal
        className="modal"
        isOpen={showModal}
        overlayClassName="overlay"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <PokemonDetails id={currentPokemon} />
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </Fragment>
  )
}

export default Page
