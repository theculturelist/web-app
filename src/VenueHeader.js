import React, { PropTypes as PT} from 'react';

const renderAbbreviation = (abbr) => (abbr ? `(${abbr})` : null)

const VenueHeader = (props) => {
  return (
    <header>
      <h1 className="f4 f3-ns fw2 tc mt1 mb2 pv1 ph2 blue lh-title">
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
