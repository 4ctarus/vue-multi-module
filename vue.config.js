const { ChakraLoaderPlugin } = require('chakra-loader')

module.exports = {
  configureWebpack: {
    plugins: [
      new ChakraLoaderPlugin()
    ]
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}