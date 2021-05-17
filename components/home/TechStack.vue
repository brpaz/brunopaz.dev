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
            data-src="~assets/icons/languages/php.svg"
            alt="PHP"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Symfony">
          <img
            data-src="~assets/icons/languages/symfony.svg"
            alt="Symfony"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Golang">
          <img
            data-src="~assets/icons/languages/go.svg"
            style="height: 120px"
            alt="Golang"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="NodeJS">
          <img
            data-src="~assets/icons/languages/node.svg"
            alt="NodeJS"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Java">
          <img
            data-src="~assets/icons/languages/java.svg"
            alt="Java"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="MySQL">
          <img
            data-src="~assets/icons/languages/mysql.svg"
            alt="MySQL"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="PostgresSQL">
          <img
            data-src="~assets/icons/languages/postgres.svg"
            alt="Postgres"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Redis">
          <img
            data-src="~assets/icons/languages/redis.svg"
            alt="Redis"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="ElasticSearch">
          <img
            data-src="~assets/icons/languages/elasticsearch.svg"
            alt="ElasticSearch"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="Apache Kafka">
          <img
            data-src="~assets/icons/languages/apache-kafka.svg"
            alt="Apache Kafka"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="HTML">
          <img
            data-src="~assets/icons/languages/html5.svg"
            alt="HTML 5"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Javascript">
          <img
            data-src="~assets/icons/languages/javascript.svg"
            alt="Javascript"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="NuxtJS">
          <img
            data-src="~assets/icons/languages/nuxt.svg"
            alt="NuxtJS"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="TailwindCSS">
          <img
            data-src="~assets/icons/languages/tailwindcss.svg"
            alt="TailwindCSS"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Linux">
          <img
            data-src="~assets/icons/languages/linux.svg"
            alt="Linux"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="Git">
          <img
            data-src="~assets/icons/languages/git.svg"
            alt="Git"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Docker">
          <img
            data-src="~assets/icons/languages/docker.svg"
            alt="Docker"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="Nginx">
          <img
            data-src="~assets/icons/languages/nginx.svg"
            alt="Nginx"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="DigitalOcean">
          <img
            data-src="~assets/icons/languages/digitalocean.svg"
            alt="DigitalOcean"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="Google Cloud Platform">
          <img
            data-src="~assets/icons/languages/google-cloud.svg"
            alt="Google Cloud"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Amazon Web Services">
          <img
            data-src="~assets/icons/languages/aws.svg"
            alt="AWS"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Netlify">
          <img
            data-src="~assets/icons/languages/netlify.svg"
            alt="Netlify"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="Ansible">
          <img
            data-src="~assets/icons/languages/ansible.svg"
            alt="Ansible"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="GitHub">
          <img
            data-src="~assets/icons/languages/github.svg"
            alt="GitHub"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="GitLab">
          <img
            data-src="~assets/icons/languages/gitlab.svg"
            alt="GitLab"
            v-lazy-load
          />
        </div>

        <div class="language-logo" title="Jenkins">
          <img
            data-src="~assets/icons/languages/jenkins.svg"
            alt="Jenkins"
            v-lazy-load
          />
        </div>
        <div class="language-logo" title="Jira">
          <img
            data-src="~assets/icons/languages/jira.svg"
            alt="Jira"
            v-lazy-load
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
