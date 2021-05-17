<template>
  <div class="flex flex-wrap w-full">
    <project-card
      v-for="project in projects"
      :key="project.slug"
      :project="project"
    />

    <div class="flex justify-center w-full">
      <a
        class="
          inline-flex
          p-4
          items-center
          bg-gray-800
          hover:bg-gray-700
          text-white
          hover:text-white
          rounded-md
        "
        href="https://github.com/brpaz?tab=repositories&q=&type=source&language="
        target="_blank"
      >
        <GitHubBrandIcon width="24" height="24" class="mr-2" />
        See more on GitHub</a
      >
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/projects/GitHubProjectCard'
import GitHubBrandIcon from '~/assets/icons/github-brands.svg?inline'
export default {
  components: { ProjectCard, GitHubBrandIcon },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
