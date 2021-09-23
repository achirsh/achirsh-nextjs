/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  // webpack5: true,       
  // webpack: (config, options) => {
  //   // console.log(options.webpack.version)
  //   const { webpack, isServer } = options
  //   config.experiments = { topLevelAwait: true };
  //   config.output.publicPath = "auto";

  //   config.module.rules.push({

  //   })

  //   const { ModuleFederationPlugin } = options.webpack.container;

  //   config.plugins.push(
  //     new ModuleFederationPlugin({
  //       remotes: {
  //         'app2': "app2@http://localhost:3333/remoteEntry.js",
  //       },
  //       shared: {},
  //     }),
  //   )

  //   return config;
  // }
}
