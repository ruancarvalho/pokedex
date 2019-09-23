import React, { useEffect } from 'react'

function PokemonDetails(props) {
  if (!props.id) return null

  return <div>{props.id}</div>
}

export default PokemonDetails
