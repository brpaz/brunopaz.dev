<template>
  <div class="flex flex-wrap w-full">
    <project-card
      v-for="project in projects"
      :key="project.slug"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectCard from '~/components/projects/ProjectCard'
export default {
  components: { ProjectCard },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
