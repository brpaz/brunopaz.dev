<template>
   <header class="bg-white sticky top-0 mb-8 w-full z-50">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-4">
        <div>
          <a href="/" class="no-underline font-sans uppercase text-primary text-3xl text-copy-primary hover:text-copy-primary">Bruno Paz</a>
        </div>
        <div class="block lg:hidden">
          <button title="Toggle Menu" @click="toggle" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600 outline-none">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'block': 'hidden'"
        >
          <li class="mr-8 mb-6 lg:mb-0" @click="onMenuItemClick">
            <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="text-copy-primary hover:text-gray-600">About</a>
            <g-link v-else to="/#about" class="text-copy-primary hover:text-gray-600">About</g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0" @click="onMenuItemClick">
            <a v-if="$route.path === '/'" href="/#whatido" v-scroll-to="'#whatido'" class="text-copy-primary hover:text-gray-600">What I do?</a>
            <g-link v-else to="/#contact" class="text-copy-primary hover:text-gray-600">What I do?</g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0" @click="onMenuItemClick">
            <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="text-copy-primary hover:text-gray-600">Projects</a>
            <g-link v-else to="/#projects" class="text-copy-primary hover:text-gray-600">Projects</g-link>
          </li>

          <li class="mr-8 mb-6 lg:mb-0" @click="onMenuItemClick">
            <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="text-copy-primary hover:text-gray-600">Contact</a>
            <g-link v-else to="/#contact" class="text-copy-primary hover:text-gray-600">Contact</g-link>
          </li>
          <li>
            <g-link to="/blog" class="text-copy-primary hover:text-gray-600">Blog</g-link>
          </li>
        </ul>
      </nav>
    </header>


</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    onMenuItemClick() {
      this.toggle()
    }
  }
}
</script>
