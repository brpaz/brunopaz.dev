const md = require('markdown-it')()

// Defines the application Base URL.
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bruno Paz | Web Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Web Engineer from Porto, Portugal. Specialized in PHP, Symfony and Golang with some professional Java experience. Strong focus on code quality and engineering practices. Fast learner and look for choosing the best technology for the job. Defender of Compassionate coding and put tech at the service of people.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: './plugins/vue-carousel.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    '@nuxtjs/svg',
    '@nuxt/image',
    'vue-social-sharing/nuxt',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'blog-page-id',
        path: '/blog/page/:page',
        component: resolve(__dirname, 'pages/blog/index.vue'),
      })
    },
  },

  generate: {
    fallback: '404.html',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  loading: {
    color: 'blue',
  },

  feed: [
    {
      path: '/rss.xml',
      async create(feed) {
        feed.options = {
          title: 'Bruno Paz Tech Blog',
          description: 'Tech Writings from Bruno Paz',
          link: `${baseUrl}/rss.xml`,
        }

        // eslint-disable-next-line global-require
        const { $content } = require('@nuxt/content')

        // get all the posts we have
        const posts = await $content('blog').fetch()

        posts.forEach((post) => {
          // the url of the post is set first
          const url = `https://${baseUrl}/blog/${post.slug}`
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.summary,
            content: post.bodyText,
          })
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ],

  sitemap: {
    hostname: baseUrl,
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      // eslint-disable-next-line global-require
      const posts = await $content('blog').only(['path']).fetch()

      return posts.map((p) => p.path)
    },
  },

  env: {
    baseUrl,
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.bodyText = md.render(document.text)
      }
    },
  },
}
