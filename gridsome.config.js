// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

const baseUrl = process.env.GRIDSOME_BASE_URL;

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Bruno Paz',
  siteUrl: baseUrl,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Bruno Paz',
          feed_url: `${baseUrl}/rss.xml`,
          site_url: baseUrl
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: baseUrl + node.path,
          author: 'Bruno Paz',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-modal'
    },
    {
       use: '@gridsome/plugin-google-analytics',
       options: {
         id: process.env.GRIDSOME_GA_ID
       }
    },
    {
       use: 'gridsome-plugin-sentry',
         options: {
           dsn: process.env.GRIDSOME_SENTRY_DSN,
           attachProps: true // defaults to true
         }
    },
     {
       use: `gridsome-plugin-netlify-cms`,
       options: {
         publicPath: `/admin`
       }
     },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
