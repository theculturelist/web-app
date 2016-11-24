// This reads from a .env file, but is committed here so you know vars you NEED
const config = {
  cloudinary: {
    cloud: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    api: process.env.REACT_APP_CLOUDINARY_API_KEY,
    secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
  },
  firebase: {
    key: process.env.REACT_APP_FIREBASE_API_KEY,
    domain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    url: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  }
};



module.exports = config;
