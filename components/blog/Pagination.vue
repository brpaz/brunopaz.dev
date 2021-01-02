<template>
  <div v-if="total > 1">
    <nav
      class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 w-1/2 mx-auto"
    >
      <div class="-mt-px w-0 flex-1 flex">
        <nuxt-link
          v-if="page > 1"
          :to="{ name: 'blog-page-id', params: { page: `${page - 1}` } }"
          class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <!-- Heroicon name: arrow-narrow-left -->
          <svg
            class="mr-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Previous
        </nuxt-link>
      </div>

      <div class="hidden md:-mt-px md:flex">
        <div v-for="(item, index) in pageRange" :key="`page-range-${index}`">
          <nuxt-link
            :v-if="item !== '...'"
            :to="{ name: 'blog-page-id', params: { page: item } }"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            :class="{ 'text-blue-600 font-bold': page == item }"
          >
            {{ item }}
          </nuxt-link>
        </div>
      </div>
      <div class="-mt-px w-0 flex-1 flex justify-end">
        <nuxt-link
          v-if="hasNext"
          :to="{ name: 'blog-page-id', params: { page: `${page + 1}` } }"
          class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          Next
          <svg
            class="ml-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    hasNext() {
      return this.page !== this.total
    },

    // Calculates the page range slider
    // see: https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
    pageRange() {
      const current = this.page
      const total = this.total
      const center = [
        current - 2,
        current - 1,
        current,
        current + 1,
        current + 2,
      ]
      const filteredCenter = center.filter((p) => p > 1 && p < total)
      const includeThreeLeft = current === 5
      const includeThreeRight = current === total - 4
      const includeLeftDots = current > 5
      const includeRightDots = current < total - 4

      if (includeThreeLeft) filteredCenter.unshift(2)
      if (includeThreeRight) filteredCenter.push(total - 1)

      if (includeLeftDots) filteredCenter.unshift('...')
      if (includeRightDots) filteredCenter.push('...')

      return [1, ...filteredCenter, total]
    },
  },
}
</script>
