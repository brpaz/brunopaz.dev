<template>
  <div class="project-card flex md:w-1/2 sm:w-full lg:w-1/3">
    <div class="flex flex-col rounded-lg shadow-lg mb-8 p-1 mr-4 bg-blue-200">
      <div class="flex items-center bg-white h-60 mb-2 overflow-hidden">
        <nuxt-link
          class="w-full"
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
          :title="`Image for ${project.name}`"
        >
          <!-- replace this with nuxt-image when more stable -->
          <img
            v-lazy-load
            :data-src="coverImage(project)"
            class="block w-full"
            aria-hidden="true"
            :alt="`Image for ${project.name}`"
          />
        </nuxt-link>
      </div>

      <div class="p-4">
        <div class="flex justify-between">
          <nuxt-link
            :to="{ name: 'projects-slug', params: { slug: project.slug } }"
            ><h3 class="font-bold text-xl mb-4">
              {{ project.name }}
            </h3></nuxt-link
          >
          <span class="text-sm">{{ project.category }}</span>
        </div>

        <nuxt-content :document="{ body: project.excerpt }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    coverImage(project) {
      return `/projects/${project.cover}`
    },
  },
}
</script>
