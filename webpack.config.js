var path = require('path');

module.exports = {
    entry: ["babel-polyfill", "./app/app.js"],
    output: {
      filename: 'script-min.js',
      path: path.resolve(__dirname, 'js')
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: { sourceMap: true } },
        { test: /\.jsx?/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000' },
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
      ]
    }
};
