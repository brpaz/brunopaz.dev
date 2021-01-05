<template>
  <div>
    <page-header :text="project.name" />

    <project-detail-header :project="project" />

    <project-detail-gallery :images="project.images" />

    <div class="leading-8 mb-8">
      <nuxt-content :document="project" />
    </div>

    <div>
      <project-detail-tech :technologies="project.technologies" />
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/shared/PageHeader'

import ProjectDetailHeader from '~/components/projects/ProjectDetailHeader'
import ProjectDetailGallery from '~/components/projects/ProjectDetailGallery'
import ProjectDetailTech from '~/components/projects/ProjectDetailTech'

export default {
  components: {
    PageHeader,
    ProjectDetailHeader,
    ProjectDetailGallery,
    ProjectDetailTech,
  },
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
  head() {
    return {
      title: `${this.project.name} | Bruno Paz`,
    }
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
</style>
