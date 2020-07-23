module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;

    return config;
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/UCR-d3-firebase-ninja-wonga/"
      : "",
};
