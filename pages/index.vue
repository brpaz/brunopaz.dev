<template>
  <div>
    <home-hero />
    <what-i-do />
    <tech-stack />
    <featured-projects />
  </div>
</template>

<script>
import HomeHero from '~/components/home/HomeHero.vue'
import WhatIDo from '~/components/home/WhatIDo.vue'
import TechStack from '~/components/home/TechStack.vue'
import FeaturedProjects from '~/components/home/FeaturedProjects.vue'
export default {
  components: { HomeHero, WhatIDo, TechStack, FeaturedProjects },
}
</script>
