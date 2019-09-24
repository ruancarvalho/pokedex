import React from 'react'

const Pokemon = ({ pokemon }) => {
  const id = pokemon.id.padStart(3, '0')
  const baseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

  return (
    <div className="pokemon">
      <button
        type="button"
        className="pokemon__sprite"
        style={{
          backgroundImage: `url(${`${baseUrl}${id}.png`})`
        }}
      />
      <p className="pokemon__name">{pokemon.name}</p>
    </div>
  )
}

export default Pokemon
