<template>
  <div>
    <h3 class="font-bold text-xl mb-8">Technologies and Tools</h3>
    <div
      class="technologies-list flex justify-center md:justify-start flex-wrap"
    >
      <div
        v-for="tech in technologies"
        :key="tech"
        class="mb-4 mr-4 overflow-hidden flex items-center justify-center"
        style="width: 96px; height: 96px"
        :title="tech"
        :alt="tech"
      >
        <img :src="techImage(tech)" :alt="tech" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      required: true,
    },
  },
  methods: {
    techImage(name) {
      name = name.toLowerCase().replace(' ', '-')
      let src = ''
      try {
        src = require(`~/assets/icons/languages/${name}.svg`)
      } catch (e) {
        console.error(e)
      }
      return src
    },
  },
}
</script>

<style>
.technologies-list img {
  width: 64px;
  overflow: hidden;
}
</style>
