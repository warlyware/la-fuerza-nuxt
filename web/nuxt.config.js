import pkg from './package'
import sanityClient from './sanityClient'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'La Fuerza de Familias Latinas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        'property': 'og:title',
        'content': `La Fuerza de Familias Latinas`,
      },
      {
        'property': 'og:description',
        'content': 'La Fuerza de Familias Latinas',
      },
      {
        'property': 'og:image',
        'content': '/images/la-fuerza-logo.svg'
      }
    ]
    //link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    MAPQUEST_KEY: process.env.MAPQUEST_KEY,
    API_BASE_URL: process.env.API_BASE_URL,
    BASE_URL: process.env.BASE_URL
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/base.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-youtube',
    '~/plugins/vue-sidebar-menu',
    '~/plugins/vue-fragment',
    '~/plugins/vue-popover',
    '~/plugins/vue-image-lightbox',
    '~/plugins/vue-simple-accordion',
    '~/plugins/i18n.js'
    // '~/plugins/eventInformation'
  ],

  /*
   ** Nuxt.js modules
   */
  buildModules: [
    '@nuxtjs/moment'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    'vue-social-sharing/nuxt',
    [
      'nuxt-i18n',
      {
        locale: 'es',
        beforeLanguageSwitch: (oldLocale, newLocale) => {
          console.log({ oldLocale, newLocale })
        },
        vueI18n: {
          fallbackLocale: 'es'
        },
        locales: [
          {
            code: 'en',
            file: 'en.js',
            iso: 'en-US',
            name: 'English'
          },
          {
            code: 'es',
            file: 'es.js',
            iso: 'es-ES',
            name: 'Spanish'
          }
        ],
        strategy: 'prefix_except_default',
        defaultLocale: 'es',
        lazy: true,
        langDir: 'lang/',
        vuex: {
          moduleName: 'i18n',
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true
        }
      }
    ]
  ],

  /*
   ** Set global info from sanity document
   */
  eventInformation: () => {
    return sanityClient.fetch('*[_id == "eventInformation"]').then(res => res)
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          stage: 3,
          features: {
            'color-mod-function': { unresolved: 'warn' },
            'nesting-rules': true,
            'custom-media-queries': {
              preserve: false
            },
            'custom-properties': {
              preserve: false
            }
          }
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });

    }
  }
}
