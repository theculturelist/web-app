import React, { PropTypes } from 'react';
import cloudinary from 'cloudinary';
import config from './config/config';

cloudinary.config(
  {
    cloud_name: config.cloudinary.cloud,
    api_key: config.cloudinary.api,
    api_secret: config.cloudinary.secret,
    secure: true,
  }
)

const CloudinaryImage = (props) => {
  return (
    //TODO RENDER AN SVG WHILE LOADING
    <img
      className={props.className}
      src={cloudinary.url(props.src, props.transform)}
      alt={props.name}
    />
  );
}

CloudinaryImage.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  transform: PropTypes.object,
};

CloudinaryImage.defaultProps = {
  alt: 'Placeholder Image',
  src: `Placeholder-16x9_zpm4cq.jpg`,
};

export default CloudinaryImage;
