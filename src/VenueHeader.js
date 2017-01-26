import React, { PropTypes as PT} from 'react';

const renderAbbreviation = (abbr) => (abbr ? `(${abbr})` : null)
const renderThe = (proper) => (proper ? 'The' : null)

const VenueHeader = (props) => (
  <header>
    <h1 className={`blue ${props.size} fw3 mb0 ph2 pb3 tc`}>
      {renderThe(props.name.proper)} {props.name.full} {renderAbbreviation(props.name.abbreviation)}
    </h1>
  </header>
)

VenueHeader.propTypes = {
  name: PT.object.isRequired,
}

VenueHeader.defaultProps = {
  name: 'Coming Soon',
}

export default VenueHeader;
