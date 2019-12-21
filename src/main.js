// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
import VueDisqus from 'vue-disqus';

export default function (Vue, { head }) {

  Vue.component('Layout', DefaultLayout);

  Vue.use(VueDisqus);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com/',
    crossorigin: 'crossorigin'
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap',
  });
}