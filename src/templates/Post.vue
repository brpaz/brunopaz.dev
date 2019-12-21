<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      

      <div v-if="$page.post.devto_url" class="mb-8 bg-gray-300 border-t border-b border-gray-500 text-gray-500 px-4 py-3">
        <p class="font-bold">This post was cross posted on <a :href="$page.post.devto_url">dev.to</a></p>
      </div>
      <div class="mb-8 flex justify-end">
          <div class="addthis_inline_share_toolbox"></div>
      </div>
      <div class="mb-8">
          <vue-disqus :shortname="disqusShortname" :identifier="$page.post.title"></vue-disqus>
      </div>
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: post(path: $path) {
      title
      summary
      date(format: "MMMM D, Y")
      content
      tags {
        title
        path
      }
      devto_url
    }
  }
</page-query>

<script>
import meta from '~/data/meta.yml';

export default {
  metaInfo() {
    const pageTitle = `${this.$page.post.title} | ${meta.title}`;

    return {
      title: pageTitle,
      meta: [
         { name: "description", content: this.$page.post.summary },
         { name: "twitter:creator", content: meta.twitter_handler },
         { name: "og:title", content: this.$page.post.title },

        { "twitter:creator": "@brunopaz88" },
        { 'og:title': pageTitle },
        { 'og:description': this.$page.post.summary}
      ],
      script: [
        { "src": "https://s7.addthis.com/js/300/addthis_widget.js#pubid=" + process.env.GRIDSOME_ADDTHIS_ID,  body: true}
      ]
    }
  },
  data() {
    return {
      disqusShortname: process.env.GRIDSOME_DISQUS_SHORTNAME
    }
  }
}
</script>

<style src="~/assets/css/github-markdown.css" />

