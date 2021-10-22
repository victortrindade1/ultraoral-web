const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  esModule: true
  // inlineImageLimit: false
})

// module.exports = {
//   reactStrictMode: true
// }

// module.exports = {
// webpack(config, options) {
//   config.module.rules.push({
//     test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
//     use: {
//       loader: 'url-loader',
//       options: {
//         limit: 100000
//       }
//     }
//   })
//   return config
// },
//   reactStrictMode: true
// }
