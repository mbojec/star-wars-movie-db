const path = require("path");
const entryPath = "src";
const entryFile = "index.js";
const Html = require('html-webpack-plugin');
const MiniCSS = require("mini-css-extract-plugin");

module.exports = function (env) {
    let isDev = !!env.dev;
    let isProd = !!env.prod;
    const config = {};

    config.entry = `./${entryPath}/${entryFile}`;

    config.output = {
        filename: isDev ? "out.js" : "out.[chunkhash].js",
        path: path.resolve(__dirname, `${entryPath}/build`),
        publicPath: '/'
    };

    config.mode = isProd? "production" : "development";
    config.devtool = isProd? false : "source-map";


    config.module = {};
    config.module.rules = [];

    const browsers = {
        dev: ["last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"],
        prod: [">0.2%",
            "not dead",
            "not op_mini all"]
    };

    const js = {
        test: /\.js$/, exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
                presets: [
                    ["@babel/preset-env", {
                        targets: {
                            browsers: isDev ? browsers.dev : browsers.prod
                        }
                    }]
                ],
                plugins: [
                    '@babel/plugin-syntax-dynamic-import'
                ]
            }
          }, "eslint-loader"
        ]
    };

    const css = {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
    };

    const scss = {
        test: /\.scss$/,
        use: [
            isProd
                ? MiniCSS.loader
                :
                {   loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: !isProd,
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [
                        require('precss'),
                        require('autoprefixer')({
                            browsers: isProd
                                ? browsers.prod : browsers.dev
                        })
                    ]
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: !isProd,
                    minimize: isProd
                }
            },
        ]
    };

    const images = {
        test: /\.(jpg|jpeg|gif|png|csv)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: isProd
                    ? '[name].[hash].[ext]'
                    : '[name].[ext]',
                publicPath: 'images',
                outputPath: 'images'
            }
        }
    };

    const fonts = {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: isProd
                    ? '[name].[hash].[ext]'
                    : '[name].[ext]',
                publicPath: 'fonts',
                outputPath: 'fonts'
            }
        }
    };

    const svg = {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    };

    config.module.rules.push(js);
    config.module.rules.push(scss);
    config.module.rules.push(images);
    config.module.rules.push(fonts);
    config.module.rules.push(svg);
    config.module.rules.push(css);

    config.plugins = [];

    if(isProd) {
        config.plugins.push( new MiniCSS(
            { filename: '_main.scss.[chunkhash].css' } )
        )
    }

    config.plugins.push( new Html({
            filename: 'index.html',
            template: `./${entryPath}/index.html`,
            minify: isProd
                ? { collapseWhitespace: true }
                : false
        })
    );


    if(isDev) {
        config.devServer = {
            contentBase: path.join(__dirname, `./${entryPath}`),
            port: 3001,
            compress: true,
            progress: true,
            overlay: true,
            historyApiFallback: true,
        }
    }

    return config;
};
