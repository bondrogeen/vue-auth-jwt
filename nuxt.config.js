import colors from 'vuetify/es5/util/colors';

export default {
  head: {
    titleTemplate: '%s - vue-auth-jwt',
    title: 'vue-auth-jwt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    host: '0.0.0.0',
    post: process.env.NODE_ENV || 3000,
  },

  css: [],

  plugins: ['~/plugins/api.js'],

  components: {
    dirs: ['~/components/global/blocks'],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  axios: {
    proxy: true,
    prefix: '/api/v1',
  },

  proxy: {
    '/api/v1': { target: 'http://localhost:3001' },
  },

  auth: {
    plugins: ['~/plugins/auth.js'],
    watchLoggedIn: true,
    resetOnError: true,
    redirect: {
      login: '/auth',
      logout: '/',
      home: '/',
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          maxAge: 60 * 5,
          global: true,
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30,
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: { url: '/auth/login/', method: 'post' },
          refresh: { url: '/auth/refresh/', method: 'post' },
          user: { url: '/auth/user', method: 'get' },
          logout: { url: '/auth/logout/', method: 'post' },
        },
        // autoLogout: false
      },
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Nunito',
      },
      icons: false,
    },
    theme: {
      dark: false,
      default: 'light',
      disable: false,
      options: {
        cspNonce: undefined,
        customProperties: undefined,
        minifyTheme: undefined,
        themeCache: undefined,
        variations: true,
      },
      themes: {
        light: {
          primary: '#4E60FF',
          secondary: '#000C66',
          accent: '#7EC8E3',
          error: '#E74C3C',
          info: '#979797',
          success: '#1BB55C',
          warning: '#FFBB12',
        },
        dark: {
          primary: '#4E60FF',
          secondary: '#000C66',
          accent: '#7EC8E3',
          error: '#E74C3C',
          info: '#979797',
          success: '#1BB55C',
          warning: '#FFBB12',
        },
      },
    },
  },

  build: {},
};
