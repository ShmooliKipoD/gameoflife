const path = require('path');
const { plugins } = require('./webpack.distribution');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        // this is our entry point, the main JavaScript file
        app: './src/main.ts',
    },
    output: {
        // this is our output file, the one which bundles all libraries
        filename: 'main.js',
        // and this is the path of the output bundle, "dist" folder
        path: path.resolve(__dirname, 'dist'),
    },
    // we are in development mode
    mode: 'development',
    // we need a source map
    devtool: 'inline-source-map',
    // development server root is "src" folder
    devServer: {
        static: './src'
    },

    // list of extensions to resolve, in resolve order
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    // loader to handle TypeScript file type
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
        ]
    },
    plugins: [new CopyPlugin({
        patterns: [
            {
                // src/index.html
                from: 'index.html',
                context: 'src/'
            },
            {
                // every file inside src/assets folder
                from: 'assets/**/*',
                context: 'src/',
                to: 'out/assets/'
            },
            {
                // every file inside src/assets folder
                from: 'assets/**/*',
                context: 'src/',
            }
        ]
    })
    ],
};