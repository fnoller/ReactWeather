import path from 'path';
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/app.js')
    ],

    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared'),
                ],
                loaders: [ 'react-hot', 'babel' ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        root: __dirname,
        alias: {
        },
        extensions: [ '', '.js', '.jsx' ]
    }
}