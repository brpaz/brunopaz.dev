<template>
  <div>
    <h2 class="font-bold text-secondary-600 text-4xl mb-4 text-center">
      Featured Projects
    </h2>

    <p class="mb-4 text-center">Some projects I have worked on.</p>

    <div class="flex flex-wrap w-full justify-center">
      <project-card
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>

    <div class="flex justify-center w-full">
      <nuxt-link
        class="inline-flex p-4 items-center bg-primary-800 hover:bg-primary-700 text-white hover:text-white rounded-md"
        to="projects"
      >
        See more projects</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/projects/ProjectCard'
// TODO teste
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    this.projects = await this.$content('projects')
      .sortBy('position', 'asc')
      .where({ type: { $eq: 'company' } })
      .where({ featured: { $eq: true } })
      .limit(3)
      .fetch()
  },
}
</script>
