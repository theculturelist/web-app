import React, { PropTypes as PT} from 'react';

const renderAbbreviation = (abbr) => (abbr ? `(${abbr})` : null)

const VenueHeader = (props) => {
  return (
    <header>
      <h1 className="f4 f3-ns fw3 fw1-l tc mb0 pv3 ph2 blue">
        {props.name} {renderAbbreviation(props.abbreviation)}
      </h1>
    </header>
  );
}

VenueHeader.propTypes = {
  name: PT.string.isRequired,
  abbreviation: PT.string,
};

VenueHeader.defaultProps = {
  name: 'The Culture List',
};

export default VenueHeader;
