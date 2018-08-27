module.exports = {
  router: {
    base: '/app/', // 路由base选项
    linkActiveClass: 'active-link',
    middleware: 'user', // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    extendRoutes (routes) {
      /* routers.push({
        name: 'lost',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      }) */
    }
  },
  prefetch: true, // 预加载
  vender: [
    'element-ui'
  ],
  plugins: [
    { src: './plugins/element-ui', ssr: true }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  babel: {
    "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    {src: 'element-ui/lib/theme-chalk/index.css'},
    // { src: 'element-ui', lang: 'css'},
    { src: './assets/css/main.less', lang: 'less' } // 使用预处理器

  ],
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#3B8070' },
  loading: './components/Loading.vue',
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // vue-loader
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.loaders.less = 'vue-style-loader!css-loader!less-loader'
    }
  }
}
