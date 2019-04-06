var webpack = require('webpack');
const defaultWebpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config.js');

module.exports = function () {
    defaultWebpackConfig.prod.output['chunkFilename'] = "[name]-[chunkhash].js";
    defaultWebpackConfig.dev.output['chunkFilename'] = "[name]-[chunkhash].js";
    return defaultWebpackConfig;
};