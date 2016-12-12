import React, { PropTypes as PT} from 'react';

const renderAbbreviation = (abbr) => (abbr ? `(${abbr})` : null)

const VenueHeader = (props) => (
  <header>
    <h1 className="blue f4 fw3 fw3-l mb0 ph2 pv3 tc">
      {props.name} {renderAbbreviation(props.abbreviation)}
    </h1>
  </header>
)

VenueHeader.propTypes = {
  name: PT.string.isRequired,
  abbreviation: PT.string,
}

VenueHeader.defaultProps = {
  name: 'Coming Soon',
}

export default VenueHeader;
