import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import webpackConfig from '../webpack.config.dev';
import path from 'path';

let app = express();

//app.use(express.static('public'));

app.use(bodyParser.json());

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler,{
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, function() {
   console.log('Express server is up on port 3000');
});