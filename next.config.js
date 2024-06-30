// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Example of custom configuration
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    // Add your custom webpack configurations here

    return config;
  },
};
