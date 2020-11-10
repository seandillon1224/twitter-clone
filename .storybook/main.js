const path = require('path')
const webpack = require('webpack')
// const nextEnvs = require('../next.constants')

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Adds next.constants dev process.env values
    // const devEnv = {}
    // Object.entries(nextEnvs.dev).forEach(([key, value]) => {
    //   devEnv[`process.env.${key}`] = JSON.stringify(value)
    // })

    // config.plugins.push(
    //   new webpack.DefinePlugin({
    //     ...devEnv
    //   })
    // );

    // Remove the existing css rule
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/'
    );

    // config.module.rules.push({
    //   test: /\.css$/,
    //   include: /\.module.css$/,
    //   use: [
    //     'style-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         modules: {
    //           localIdentName: 'styles_[local]__[hash:base64:5]',
    //         },
    //       }
    //     },
    //     postCssLoader,
    //   ],
    // }, {
    //   test: /\.css$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     postCssLoader,
    //   ],
    //   exclude: /\.module\.css$/
    // });

    // Enables absolute import support
    config.resolve.modules.push(path.resolve(__dirname, "../src"));

    // Return the altered config
    return config;
  },
}