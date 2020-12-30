<template>
  <div>
    <home-hero />
    <what-i-do />
  </div>
</template>

<script>
import HomeHero from '~/components/home/HomeHero.vue'
import WhatIDo from '~/components/home/WhatIDo.vue'
export default {
  components: { HomeHero, WhatIDo },
}
</script>
