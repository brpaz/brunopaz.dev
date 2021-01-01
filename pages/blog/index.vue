<template>
  <div>
    <page-header text="My Blog" />

    <div class="mb-4">
      <posts-list :posts="posts" />
    </div>

    <pagination
      v-if="posts.length > 0 && pagination.total > 1"
      :page="pagination.page"
      :total="pagination.total"
    />
  </div>
</template>

<script>
import PostsList from '~/components/blog/PostsList'
import Pagination from '~/components/blog/Pagination'
import PageHeader from '~/components/global/PageHeader'

const POSTS_PER_PAGE = 6

export default {
  components: { PostsList, Pagination, PageHeader },

  async fetch() {
    await this.fetchPosts()
  },

  data() {
    return {
      posts: [],
      pagination: {
        total: 0,
      },
    }
  },

  watch: {
    '$route.query': 'fetchPosts',
  },

  methods: {
    async fetchPosts() {
      let currentPage = 1
      if (this.$isServer) {
        // const req = this.$nuxt.context.ssrContext.req
        // TODO
        /* currentPage =
          new url.URL('http://localhost:3000/blog?page=2').searchParams.page ||
          1 */
      } else {
        currentPage = parseInt(this.$route.query.page) || 1
      }

      const allPosts = await this.$content('blog')
        .sortBy('date', 'desc')
        .fetch()

      const totalPosts = allPosts.length
      const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)

      const offset = (currentPage - 1) * POSTS_PER_PAGE
      const limit = offset + POSTS_PER_PAGE
      const posts = allPosts.slice(offset, limit)

      this.posts = posts

      this.pagination = {
        page: currentPage,
        total: totalPages,
      }
    },
  },
}
</script>
