import React, { PropTypes } from 'react';
import cloudinary from 'cloudinary';
import env from './config/env';

cloudinary.config(
  {
    cloud_name: env.cloudinary.cloud,
    api_key: env.cloudinary.api,
    api_secret: env.cloudinary.secret,
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
