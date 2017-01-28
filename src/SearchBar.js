import React from 'react'

const SearchBar = (props) => (
  <div className="bg-light-blue flex h3 items-center mt5 w-100 w-80-l z-1">
    <input className="b--gray ba br3 gray input-reset mh3 outline-0 pa2 w-100 w-50-l" type='text' placeholder={"Search By Name"} onChange={props.filterSearch} onFocus={props.onFocus} />
  </div>
)

export default SearchBar;
