<template>
  <div>
    <page-header text="My Blog" />

    <div class="mb-4">
      <posts-list :posts="posts" />
    </div>

    <pagination :page="pagination.page" :total="pagination.total" />
  </div>
</template>

<script>
import PostsList from '~/components/blog/PostsList'
import Pagination from '~/components/blog/Pagination'
import PageHeader from '~/components/global/PageHeader'

const POSTS_PER_PAGE = 6

export default {
  components: { PostsList, Pagination, PageHeader },
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
