<template>
  <section id="projects" class="container container-lg mx-auto pt-16 pb-16">
    <div class="container container-lg mx-auto">
      <h2>
        <svg
        class="inline"
        width="48"
        height="48"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
       <path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
      </svg>  
        Projects
      </h2>

      <div class="flex flex-wrap justify-center">
        <ProjectCard v-for="project in projects" :key="project.id" :item="project"/>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '~/components/ProjectCard';
import projectData from "~/data/projects.yml";

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projectData.sort((a, b) => a.order > b.order )
    }
  }
};
</script>
