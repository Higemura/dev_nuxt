module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-project',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/logger'
  ],
  router: {
    middleware: [
      'redirector',
      'auth'
    ]
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
    // use: [
    //   ['markdown-it-container', containerName],
    //   'markdown-it-attrs'
    // ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
