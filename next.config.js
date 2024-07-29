/** @type {import('next').NextConfig} */

module.exports = {/* eslint-disable-line */
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  reactStrictMode: false,
  poweredByHeader: false,
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeUselessDefs",
                  active: false,
                }            
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
