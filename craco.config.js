const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // Add markdown loader
      webpackConfig.module.rules.push({
        test: /\.md$/,
        type: "asset/source",
      });

      // Set publicPath for assets
      webpackConfig.output.publicPath = "/eating-eating/";

      return webpackConfig;
    },
  },
};
