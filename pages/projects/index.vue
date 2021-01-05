<template>
  <div>
    <page-header text="Projects" />

    <p class="text-center mb-8">This is a list of some projects I worked</p>

    <section id="projects-list" class="mb-8">
      <projects-list :projects="projects" />
    </section>

    <section id="open-source">
      <page-header text="Open Source" />

      <div class="text-center mb-8">
        <p>
          Development work woudldn´t be what it is today, without all the
          awesome Open Source software available.
        </p>
        <p>
          I like to contribute back to the community, so anything that I make
          and I think it can be usefull to others, I Open Source it on GitHub.
        </p>
        <p>
          Here are some of my work, most Ulauncher Extensions, VSCode Extensions
          and small libraries.
        </p>
      </div>

      <gitHub-projects-list :projects="gitHubProjects" />
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/shared/PageHeader'
import ProjectsList from '~/components/projects/ProjectsList'
import GitHubProjectsList from '~/components/projects/GitHubProjectsList'
export default {
  components: { PageHeader, ProjectsList, GitHubProjectsList },
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .sortBy('position', 'asc')
      .where({ type: { $eq: 'company' } })
      .fetch()

    const gitHubProjects = await $content('projects')
      .sortBy('position', 'asc')
      .where({ type: { $eq: 'github' } })
      .fetch()

    return {
      projects,
      gitHubProjects,
    }
  },
}
</script>
