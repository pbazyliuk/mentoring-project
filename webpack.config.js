const env = process.env.NODE_ENV || 'develop';

const config = require(`./webpack/webpack.${env}.js`);

module.exports = config;
