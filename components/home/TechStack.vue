<template>
  <section
    id="tech-stack"
    class="flex flex-col mx-auto justify-center text-center mb-8"
  >
    <h2 class="font-bold text-secondary-600 text-4xl mb-4 text-center">
      Teck Stack
    </h2>

    <div class="mb-12">
      <p>
        These are some technologies and tools that I am familiar with and that I
        used over the years, both in professional and personal projects.
      </p>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-wrap justify-center">
        <div class="language-logo" title="PHP">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/php.svg"
            alt="PHP"
          />
        </div>

        <div class="language-logo" title="Symfony">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/symfony.svg"
            alt="Symfony"
          />
        </div>

        <div class="language-logo" title="Golang">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/go.svg"
            style="height: 120px"
            alt="Golang"
          />
        </div>

        <div class="language-logo" title="NodeJS">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/node.svg"
            alt="NodeJS"
          />
        </div>

        <div class="language-logo" title="Java">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/java.svg"
            alt="Java"
          />
        </div>

        <div class="language-logo" title="MySQL">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/mysql.svg"
            alt="MySQL"
          />
        </div>

        <div class="language-logo" title="PostgresSQL">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/postgres.svg"
            alt="Postgres"
          />
        </div>

        <div class="language-logo" title="Redis">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/redis.svg"
            alt="Redis"
          />
        </div>

        <div class="language-logo" title="ElasticSearch">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/elasticsearch.svg"
            alt="ElasticSearch"
          />
        </div>
        <div class="language-logo" title="Apache Kafka">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/apache-kafka.svg"
            alt="Apache Kafka"
          />
        </div>
        <div class="language-logo" title="HTML">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/html5.svg"
            alt="HTML 5"
          />
        </div>

        <div class="language-logo" title="Javascript">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/javascript.svg"
            alt="Javascript"
          />
        </div>

        <div class="language-logo" title="NuxtJS">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/nuxt.svg"
            alt="NuxtJS"
          />
        </div>

        <div class="language-logo" title="TailwindCSS">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/tailwindcss.svg"
            alt="TailwindCSS"
          />
        </div>

        <div class="language-logo" title="Linux">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/linux.svg"
            alt="Linux"
          />
        </div>
        <div class="language-logo" title="Git">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/git.svg"
            alt="Git"
          />
        </div>

        <div class="language-logo" title="Docker">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/docker.svg"
            alt="Docker"
          />
        </div>
        <div class="language-logo" title="Nginx">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/nginx.svg"
            alt="Nginx"
          />
        </div>

        <div class="language-logo" title="DigitalOcean">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/digitalocean.svg"
            alt="DigitalOcean"
          />
        </div>
        <div class="language-logo" title="Google Cloud Platform">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/google-cloud.svg"
            alt="Google Cloud"
          />
        </div>

        <div class="language-logo" title="Amazon Web Services">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/aws.svg"
            alt="AWS"
          />
        </div>

        <div class="language-logo" title="Netlify">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/netlify.svg"
            alt="Netlify"
          />
        </div>
        <div class="language-logo" title="Ansible">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/ansible.svg"
            alt="Ansible"
          />
        </div>

        <div class="language-logo" title="GitHub">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/github.svg"
            alt="GitHub"
          />
        </div>
        <div class="language-logo" title="GitLab">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/gitlab.svg"
            alt="GitLab"
          />
        </div>

        <div class="language-logo" title="Jenkins">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/jenkins.svg"
            alt="Jenkins"
          />
        </div>
        <div class="language-logo" title="Jira">
          <img
            v-lazy-load
            data-src="~assets/icons/languages/jira.svg"
            alt="Jira"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="postcss">
#tech-stack img {
  @apply mx-auto;

  max-width: 100px;
  width: 100%;
}

#tech-stack .language-logo {
  width: 120px;
  height: 120px;
  @apply flex items-center mr-8 mb-8;

  overflow: hidden;
}
</style>
