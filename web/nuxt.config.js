import sanityClient from './sanityClient'
import axios from 'axios'

const SANITY_API_URL = 'https://pb0hrpvr.api.sanity.io/v1/data/query/production?'
const query = `
*[_id == "page-resources"][0] {
  books[]->{
    slug
  },
  tips[]->{
    ...
  }
}
`
const qs = encodeURIComponent(query)
const url = `${SANITY_API_URL}query=${qs}`

let dynamicRoutes = async () => {
  const { data } = await axios.get(url)

  const books = data.result.books.map(book => `/resources/books/${book.slug.current}`)
  const tips = data.result.tips.map((_, i) => `/resources/tips/${i}`)

  return [...books, ...tips]
}

export default {
  mode: 'spa',
  generate: {
    routes: dynamicRoutes,
    fallback: true
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'La Fuerza de Familias Latinas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'La Fuerza de Familias Latinas' },
    ]
    //link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    MAPQUEST_KEY: process.env.MAPQUEST_KEY,
    API_BASE_URL: process.env.API_BASE_URL,
    BASE_URL: process.env.BASE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
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
    '@nuxtjs/moment',
    ['@nuxtjs/google-analytics', {
      id: 'UA-177598743-1',
      debug: {
        enabled: true,
        sendHitTask: true
      }
    }]
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    'vue-social-sharing/nuxt',
    [
      'nuxt-seo',
      {
        baseUrl: 'https://www.lafuerzadefamilias.org',
        name: 'La Fuerza de Familias Latinas',
        title: 'La Fuerza de Familias Latinas',
        templateTitle: '%title%',
        description: 'La Fuerza de Familias Latinas',
        image: 'https://www.lafuerzadefamilias.org/images/la-fuerza-logo.png'
        //...
      }
    ],
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          alwaysRedirect: false,
          fallbackLocale: 'es',
          onlyOnRoot: false,
          useCookie: true,
          cookieCrossOrigin: false,
          cookieDomain: null,
          cookieKey: 'i18n_redirected',
          cookieSecure: false
        },
        locale: 'es',
        seo: false,
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
        strategy: 'no_prefix',
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
