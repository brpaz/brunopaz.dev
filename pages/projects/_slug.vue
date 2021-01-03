<template>
  <div>
    <page-header :text="project.name" />

    <div class="mb-8 flex justify-center flex-wrap">
      <div class="flex mb-4 mr-6">
        <FolderIcon
          with="24"
          height="24"
          class="text-blue-600 mr-2"
          aria-hidden="true"
        />
        {{ project.category | capitalize }}
      </div>
      <div class="flex mb-4 mr-6">
        <CalendarIcon with="24" height="24" class="text-blue-600 mr-2" />
        {{ project.start_date }} - {{ project.end_date || 'current' }}
      </div>
      <div v-if="project.url" class="flex mb-4 mr-6">
        <GlobeIcon with="24" height="24" class="text-blue-600 mr-2" />
        <a :href="project.url" target="_blank">{{ project.url }}</a>
      </div>
    </div>

    <div
      v-if="project.images.length > 0"
      class="carousel-wrapper relative flex mx-auto w-4/5 mb-8"
    >
      <carousel
        :perPage="1"
        :navigationEnabled="true"
        paginationColor="#475569"
        paginationActiveColor="#2563EB"
      >
        <slide
          v-for="image in project.images"
          :key="image"
          class="w-full flex overflow-hidden border border-blue-300"
        >
          <img :src="`/projects/${image}`" />
        </slide>
      </carousel>
    </div>

    <div class="leading-8 mb-8">
      <nuxt-content :document="project" />
    </div>

    <div>
      <h3 class="font-bold text-xl mb-8">Technologies and Tools</h3>
      <div
        class="technologies-list flex justify-center md:justify-start flex-wrap"
      >
        <div
          v-for="tech in project.technologies"
          :key="tech"
          class="mb-4 mr-4 overflow-hidden flex items-center justify-center"
          style="width: 96px; height: 96px"
          :title="tech"
          :alt="tech"
          v-html="renderTechIcon(tech)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/global/PageHeader'
import CalendarIcon from '~/assets/icons/calendar.svg?inline'
import GlobeIcon from '~/assets/icons/globe.svg?inline'
import FolderIcon from '~/assets/icons/folder-open.svg?inline'

export default {
  components: {
    PageHeader,
    CalendarIcon,
    GlobeIcon,
    FolderIcon,
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
  methods: {
    renderTechIcon(name) {
      name = name.toLowerCase().replace(' ', '-')
      let src = ''
      try {
        src = require(`~/assets/icons/languages/${name}.svg?raw`)
      } catch (e) {
        console.error(e)
      }
      return src
    },
  },
}
</script>

<style lang="postcss">
.nuxt-content h2 {
  @apply font-bold text-2xl mb-4;
}
.nuxt-content h3 {
  @apply font-bold text-lg mb-4;
}
.nuxt-content p {
  @apply mb-4;
}

.nuxt-content img {
  @apply my-4 mx-auto;
}

.nuxt-content ul {
  @apply list-disc ml-6 mb-4;
}

.nuxt-content hr {
  @apply flex w-1/2 mt-12 mb-12 border-blue-300 mx-auto;
}

.VueCarousel-slide {
  @apply min-w-full;
}

.VueCarousel-navigation-button {
  @apply text-blue-600  hidden md:block cursor-pointer !important;
}

.technologies-list svg {
  width: 64px;
  overflow: hidden;
}
</style>
