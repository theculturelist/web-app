import React, { PureComponent } from 'react'

class SearchBar extends PureComponent {
  render() {
    return (
      <div className="bg-light-blue flex h3 items-center mt5 w-100 z-1">
        <input className="b--gray ba br3 gray input-reset mh3 outline-0 pa2 w-100 w-50-l" type='text' placeholder={"Search By Name"} onChange={this.props.filterSearch} onFocus={this.props.onFocus} />
      </div>
    )
  }
}

export default SearchBar;
