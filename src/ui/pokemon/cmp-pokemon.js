import React, { PureComponent } from 'react'

const imageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props
    const id = pokemon.id.padStart(3, '0')

    return (
      <div className="pokemon">
        <button
          type="button"
          className="pokemon__sprite"
          style={{
            backgroundImage: `url(${`${imageUrl}${id}.png`})`
          }}
        />
        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    )
  }
}

export default Pokemon
