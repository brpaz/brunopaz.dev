<template>
  <header class="flex w-full h-16 justify-between items-center mb-16">
    <nuxt-link class="flex items-center" to="/">
      <HomeLogo with="72px" height="72px" class="fill-current text-blue-600" />
      <span class="text-blue-600 font-bold text-xl uppercase">Bruno Paz</span>
    </nuxt-link>

    <ul class="main-nav items-center hidden md:flex">
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/work">Work</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>

    <nav
      v-if="showMobileMenu"
      class="main-nav md:hidden absolute left-0 bg-white w-full text-center border-b shadow-sm"
      style="top: 72px"
    >
      <ul>
        <li class="block mb-2">
          <nuxt-link to="about">About</nuxt-link>
        </li>
        <li class="block mb-2">
          <nuxt-link to="work">Work</nuxt-link>
        </li>
        <li class="block mb-2">
          <nuxt-link to="blog">Blog</nuxt-link>
        </li>
        <li class="block mb-2">
          <nuxt-link to="contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <button
      class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
      aria-expanded="false"
      style="width: 36px; height: 36px"
      @click="toggleMobileMenu()"
    >
      <span class="sr-only">Open main menu</span>

      <svg
        class="block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </header>
</template>

<script>
import HomeLogo from '~/assets/icons/code.svg?inline'
export default {
  components: { HomeLogo },
  data() {
    return {
      showMobileMenu: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
  },
}
</script>

<style lang="postcss">
.main-nav a {
  @apply mr-8 font-medium text-xl text-blue-gray-500 hover:text-gray-700;
}

.main-nav a.nuxt-link-exact-active {
  @apply text-primary-600;
}
</style>
