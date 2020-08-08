module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tarkov_ammo_chart/'
    : '/',
  configureWebpack: {
    devtool: 'source-map',
  },
};
