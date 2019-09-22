import React, { Component } from 'react'
import hardtack from 'hardtack'
import Pokemon from '../pokemon/cmp-pokemon'
import Search from '../search/cmp-search'

class Page extends Component {
  state = {
    searchString: '',
    pokemonsIds: [],
    error: null
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

  render() {
    const { searchString, pokemonsIds, error } = this.state
    const { collection, isFetched } = this.props

    const pokemons = pokemonsIds.map(pokemonId => {
      const pokemon = collection[pokemonId]

      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
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
    )
  }
}

export default Page
