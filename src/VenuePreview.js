import React, { Component, PropTypes as PT} from 'react';
const cloudinaryPrefix = "http://res.cloudinary.com/theculturelist/image/upload/q_auto";

class Venue extends Component {
  static propTypes = {
    name: PT.string.isRequired,
    imageUrl: PT.string.isRequired,
    address: PT.string.isRequired,
    location: PT.object.isRequired,
  };
  static defaultProps = {
    name: "Coming Soon",
    imageUrl: "/v1455314704/Placeholder-16x9_zpm4cq.jpg",
    address: "Your City",
    distance: "Close",
  };

  render() {
    return (
      <article className="pa3 fl w-100-s w-50-m w-third-l animated fadeIn">
        <div className="ba br2 b--gray">
          <header className="pv2 ph3">
             <h2 className="f5 ttu dark-gray">{this.props.name}</h2>
          </header>
          <img
            src={cloudinaryPrefix + this.props.imageUrl}
            className="pointer w-100"
            alt={this.props.title}
          />
          <div className="pa3">
            <a href="#" className="link f6">{this.props.address}</a>
            <small className="gray db pv2">Hours Today: </small>
            <small className="gray db pv2">Distance Away {this.props.distance} </small>
          </div>
        </div>
      </article>
    );
  }
}

export default Venue;
