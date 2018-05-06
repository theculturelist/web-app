import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Img from 'react-image'
import LazyLoad from 'react-lazyload'
import cloudinary from 'cloudinary-core'

cloudinary.config({
  cloud_name: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
  api_secret: process.env.GATSBY_CLOUDINARY_API_SECRET,
  secure: true,
});

class CloudinaryImage extends Component {
  imgUrl = cloudinary.url(this.props.src, this.props.transform)

  getAspectRatio = (ratio) => {
    const ratioMap = {thumbnail: '1x1', widescreen: '16x9'};
    return ratioMap[ratio];
  }

  render() {
    return (
      <LazyLoad
        height={null}
        offset={200}
        once
      >
        <Img
          className={`animated fadeIn ${this.props.className}`}
          src={this.imgUrl}
          alt={this.props.name}
          style={this.props.style}
          loader={
            <div className={`aspect-ratio aspect-ratio--${this.getAspectRatio(this.props.aspectRatio)} bg-light-gray`}>
              <div className="aspect-ratio-object" />
            </div>
          }
        />
      </LazyLoad>
    );
  }
}

CloudinaryImage.propTypes = {
  alt: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  transform: PropTypes.object,
};

CloudinaryImage.defaultProps = {
  alt: 'Placeholder Image',
  aspectRatio: 'widescreen',
  src: `Placeholder-16x9_zpm4cq.jpg`,
};

export default CloudinaryImage;
