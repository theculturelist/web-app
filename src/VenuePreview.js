import React, { Component, PropTypes as PT} from 'react';
const cloudinaryPrefix = "http://res.cloudinary.com/theculturelist/image/upload/q_auto";

class Venue extends Component {
  static propTypes = {
    name: PT.string.isRequired,
    imageUrl: PT.string.isRequired,
    address: PT.string.isRequired,
    distance: PT.number.isRequired,
  };

  static defaultProps = {
    name: "Coming Soon",
    imageUrl: "/v1455314704/Placeholder-16x9_zpm4cq.jpg",
    address: "Your City",
    distance: "Close",
  };

  render() {
    return (
      <article className="pointer cf ba b--gray mv3 br2 fl w-100 w-50-ns animated slideInUp">
        <div className="pv2 ph2">
           <h1 className="f6 ttu dark-gray">{this.props.name}</h1>
        </div>
        <img src={cloudinaryPrefix + this.props.imageUrl} className="w-100" alt={this.props.title} />
        <div className="pa3">
          <a href="#" className="link f6">{this.props.address}</a>
          <small className="gray db pv2">Hours Today: </small>
          <small className="gray db pv2">Distance Away - {this.props.distance}</small>
        </div>
      </article>
    );
  }
}

export default Venue;
