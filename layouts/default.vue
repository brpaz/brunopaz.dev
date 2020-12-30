<template>
  <div class="h-screen w-full flex flex-col text-blue-gray-600">
    <div class="container mx-auto mb-auto p-4">
      <nav-bar />

      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/global/NavBar'
import Footer from '~/components/Footer'
export default {
  components: { NavBar, Footer },
  data() {
    return {
      showMobileMenu: false,
    }
  },
}
</script>

<style>
html {
  font-family: 'Inter', Roboto, sans-serif;
  font-size: 16px;
}
</style>
