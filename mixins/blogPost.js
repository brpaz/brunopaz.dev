export default {
  methods: {
    formatDate(post) {
      const dt = new Date(post.date)

      return dt.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    },

    // Helper function that resturns the Post cover image.
    getCoverImage(post, absolute = false) {
      let imageUrl = '/blog/cover-default.jpg'
      if (post.cover) {
        imageUrl = `/blog/${post.cover}`
      }

      if (absolute) {
        imageUrl = `${process.env.baseUrl}${imageUrl}`
      }

      return imageUrl
    },
  },
}
