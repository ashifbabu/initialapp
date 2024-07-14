/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              // Any specific options can go here
            },
          },
        ],
      });
      return config;
    },
  };
  
  export default nextConfig;
  