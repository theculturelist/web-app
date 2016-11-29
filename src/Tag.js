import React, { PropTypes as PT} from 'react';

const Tag = (props) => (
  <span className="f6 pv1 ph2 mr1 br-pill bg-blue near-white">{props.name}</span>
);

Tag.propTypes = {
  name: PT.string.isRequired,
};

export default Tag;
