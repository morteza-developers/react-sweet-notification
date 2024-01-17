const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
require("dotenv").config({ path: "./.env.development" });

const devConfig = (env) => {
  const watch = env?.watch || false;
  return {
    devtool: "inline-cheap-source-map",
    entry: path.join(__dirname, "demo", "index.tsx"),
    target: "web",
    mode: "development",
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
      watchFiles: watch ? ["./src/*", "./demo/*"] : undefined,
      liveReload: watch,
      hot: false,
      open: watch,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "public"),
      },
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
        reconnect: 5,
      },
      compress: true,
      port: 3000,
    },
    resolve: {
      modules: [
        path.join(__dirname, "src"),
        path.join(__dirname, "demo"),
        "node_modules",
      ],
      extensions: [".css", ".js", ".jsx", ".scss", ".ts", ".tsx"],
    },

    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new InterpolateHtmlPlugin({}),
    ],
  };
};

module.exports = (env) => {
  return merge(commonConfig(env), devConfig(env));
};
