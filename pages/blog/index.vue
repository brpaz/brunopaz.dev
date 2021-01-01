<template>
  <div>
    <h1 class="font-bold text-4xl text-center text-secondary-600 mb-12">
      My Blog
    </h1>

    <div class="mb-4">
      <posts-list :posts="posts" />
    </div>

    <pagination :page="pagination.page" :total="pagination.total" />
  </div>
</template>

<script>
import PostsList from '~/components/blog/PostsList.vue'
import Pagination from '~/components/blog/Pagination.vue'

const POSTS_PER_PAGE = 6

export default {
  components: { PostsList, Pagination },
  data() {
    return {
      posts: [],
      pagination: {
        page: 1,
        total: 1,
      },
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
  },

  watch: {
    '$route.query': '$fetch',
    page() {
      this.fetchPosts()
    },
  },
  async fetch() {
    await this.fetchPosts()
  },

  methods: {
    async fetchPosts() {
      const allPosts = await this.$content('blog')
        .sortBy('date', 'desc')
        .fetch()

      const totalPosts = allPosts.length
      const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)

      const offset = (this.page - 1) * POSTS_PER_PAGE
      const limit = offset + POSTS_PER_PAGE
      const posts = allPosts.slice(offset, limit)

      this.posts = posts

      this.pagination = {
        page: this.page,
        total: totalPages,
      }
    },
  },
}
</script>
