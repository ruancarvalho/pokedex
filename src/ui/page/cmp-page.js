import React, { Component, Fragment } from 'react'
import hardtack from 'hardtack'
import Pokemon from '../pokemon/cmp-pokemon'
import PokemonDetails from '../pokemon/pokemon-details'
import Search from '../search/cmp-search'
import Modal from 'react-modal'

Modal.setAppElement('#root')

class Page extends Component {
  state = {
    searchString: '',
    pokemonsIds: [],
    error: null,
    showModal: false
  }

  componentDidMount() {
    this.props.getPokemons().then(action => {
      if (action.error) {
        return this.setState({
          error: action.payload.message
        })
      }
    })
  }

  handleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim()
    const { collection } = this.props

    hardtack.set('searchString', value, {
      maxAge: '31536000'
    })

    if (value === '' || value.length < 3) {
      return this.setState({
        pokemonsIds: [],
        searchString: value
      })
    }

    const pokemonsIds = Object.keys(collection)
      .filter(pokemonId => {
        const pokemon = collection[pokemonId]

        return pokemon.name.includes(value)
      })
      .slice(0, 4)

    this.setState({
      pokemonsIds,
      searchString: value
    })
  }

  handlePokemonClick(id) {
    this.setState({
      currentPokemon: id,
      showModal: true
    })
  }

  handleCloseModal() {
    this.setState({
      currentPokemon: null,
      showModal: false
    })
  }

  render() {
    const { searchString, pokemonsIds, error } = this.state
    const { collection, isFetched } = this.props

    const pokemons = pokemonsIds.map(pokemonId => {
      const pokemon = collection[pokemonId]

      return (
        <li
          key={pokemon.id}
          className="pokemons__item"
          onClick={this.handlePokemonClick.bind(this, pokemon.id)}
        >
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
      <Fragment>
        <div className="page">
          {error && <div className="page__error">{error}</div>}
          <div className="page__logo">
            <h1>Pokedex</h1>
          </div>
          <div className="page__search">
            <Search onChange={this.handleSearch} value={searchString} />
          </div>
          {isFetched ? (
            <p>Loading...</p>
          ) : (
            <ul className="pokemons">{pokemons}</ul>
          )}
        </div>

        <Modal isOpen={this.state.showModal}>
          <PokemonDetails id={this.state.currentPokemon} />
          <button onClick={this.handleCloseModal.bind(this)}>
            Close Modal
          </button>
        </Modal>
      </Fragment>
    )
  }
}

export default Page
