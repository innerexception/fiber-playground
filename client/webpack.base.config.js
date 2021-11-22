const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './App.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
        { test: /\.tsx?$/, include: path.join(__dirname, '../'), loader: 'ts-loader' },
        {
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        },
        {
            test: /sw.(j|t)s$/,
            use: [{
                loader: 'file-loader',
            }]
        },
        {
            test: /\.(png|svg|jpg|gif|wav)$/,
            use: [{
                loader: 'file-loader',
                options: {
                  outputPath: './',
                },
              }]
        },
        { test: /\.(eot|ttf|svg)$/, use: ['url-loader?limit=1000000'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ gameName: '', template: 'index.html' })
  ]
}