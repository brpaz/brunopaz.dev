<template>
  <div class="flex md:w-1/2 sm:w-full lg:w-1/3">
    <div
      class="flex flex-col rounded-lg shadow-lg mb-8 p-1 mr-4 bg-gray-200 w-full"
    >
      <div class="flex flex-col p-4 h-full">
        <div class="flex h-16">
          <a :href="project.url" target="_blank" rel="noopener">
            <h3 class="font-bold text-xl mb-4">
              {{ project.name }}
            </h3></a
          >
        </div>

        <div
          class="flex-grow mb-4"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          "
        >
          <nuxt-content :document="project" />
        </div>

        <div class="text-xs text-right">
          {{ project.category }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>
