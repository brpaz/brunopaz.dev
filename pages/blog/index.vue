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
import PageHeader from '~/components/shared/PageHeader'

const POSTS_PER_PAGE = 5

export default {
  components: { PostsList, Pagination, PageHeader },
  scrollToTop: true,
  data() {
    return {
      posts: [],
      pagination: {
        total: 0,
      },
    }
  },
  async fetch() {
    await this.fetchPosts()
  },
  head() {
    return {
      title: 'Blog | Bruno Paz',
    }
  },
  methods: {
    async fetchPosts() {
      const currentPage = parseInt(this.$route.params.page) || 1
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
