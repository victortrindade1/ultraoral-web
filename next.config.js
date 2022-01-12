const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  esModule: true,
  inlineImageLimit: false, // P/ funcionar o next/image
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map'
    }
    return config
  }
})
