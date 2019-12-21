<template>
  <div class="px-8 mb-8 lg:mb-0">
    <g-image class="block mx-auto mb-4" style="width:96px;height:96px;" width="96" height="96" :alt="title" :src="getImagePath(image)"/>
    <h3 class="text-center">{{ title }}</h3>

    <div class="text-center" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",
  props: {
    title: String,
    description: String,
    image: String
  },
  methods: {
    getImagePath(image) {
        return require('~/assets/images/' + image);
    }
  },
};
</script>
