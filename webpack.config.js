const path = require("path");

module.exports = {
  mode: "production", // or 'development'
  entry: "./index.js", // Entry point of your Express.js application
  target: "node", // Specify the environment in which the code should run
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  // Add any necessary loaders for your server-side code
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // If you're using Babel
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
