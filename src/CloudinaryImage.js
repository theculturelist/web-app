import React, { PropTypes as PT } from 'react';
import cloudinary from 'cloudinary';
import config from './config';

cloudinary.config(
  {
    cloud_name: config.cloudinary.cloud,
    api_key: config.cloudinary.api,
    api_secret: config.cloudinary.secret,
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
  alt: PT.string.isRequired,
  className: PT.string,
  src: PT.string.isRequired,
  transform: PT.object,
};

CloudinaryImage.defaultProps = {
  alt: 'Placeholder Image',
  src: `Placeholder-16x9_zpm4cq.jpg`,
};

export default CloudinaryImage;
