import React, { PureComponent, PropTypes } from 'react';

class VenueHeader extends PureComponent {

  renderAbbreviation = (abbr) => (abbr ? `(${abbr})` : null)

  renderThe = (proper) => (proper ? 'The' : null)

  render() {
    return (
      <header>
        <h1 className={`blue ${this.props.size} fw3 mb0 ph2 pb3 tc`}>
          {this.renderThe(this.props.name.proper)} {this.props.name.full} {this.renderAbbreviation(this.props.name.abbreviation)}
        </h1>
      </header>
    )
  }
}

VenueHeader.propTypes = {
  name: PropTypes.object.isRequired,
}

VenueHeader.defaultProps = {
  name: 'Coming Soon',
  size: 'f4'
}

export default VenueHeader;
