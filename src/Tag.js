import React, { PropTypes as PT} from 'react';

const Tag = (props) => (
  <span className="bg-blue br-pill f6 mb1 mr1 near-white pv1 ph2 ttc">
    {props.name}
  </span>
)

Tag.propTypes = {
  name: PT.string.isRequired,
}

export default Tag;
