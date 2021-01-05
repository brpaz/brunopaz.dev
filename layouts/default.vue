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
import NavBar from '~/components/shared/NavBar'
import Footer from '~/components/shared/Footer'
export default {
  components: { NavBar, Footer },
}
</script>
