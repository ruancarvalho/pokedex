import React, { Fragment } from 'react'

const Search = ({ onChange, value }) => (
  <Fragment>
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder="Enter a pokemon name..."
      autoFocus
    />
    {value.length > 0 && value.length < 3 && (
      <div>
        <small>Please, type more letters...</small>
      </div>
    )}
  </Fragment>
)

export default Search
