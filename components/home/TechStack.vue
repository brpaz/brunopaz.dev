<template>
  <section
    id="tech-stack"
    class="flex flex-col mx-auto justify-center text-center"
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
          <PhpLogo />
        </div>

        <div class="language-logo" title="Symfony">
          <SymfonyLogo />
        </div>

        <div class="language-logo" title="Golang">
          <GolangLogo height="120px" />
        </div>

        <div class="language-logo" title="NodeJS"><NodeLogo /></div>

        <div class="language-logo" title="Java">
          <JavaLogo />
        </div>

        <div class="language-logo" title="MySQL">
          <MysqlLogo />
        </div>

        <div class="language-logo" title="PostgresSQL">
          <PostgresLogo />
        </div>

        <div class="language-logo" title="Redis"><RedisLogo /></div>

        <div class="language-logo" title="ElasticSearch"><ElasticLogo /></div>
        <div class="language-logo" title="Apache Kafka"><KafkaLogo /></div>
        <div class="language-logo" title="HTML"><HtmlLogo /></div>

        <div class="language-logo" title="Javascript">
          <JavascriptLogo />
        </div>

        <div class="language-logo" title="NuxtJS"><NuxtJsLogo /></div>

        <div class="language-logo" title="TailwindCSS"><TailwindcssLogo /></div>

        <div class="language-logo" title="Linux"><LinuxLogo /></div>
        <div class="language-logo" title="Git">
          <GitLogo />
        </div>

        <div class="language-logo" title="Docker"><DockerLogo /></div>
        <div class="language-logo" title="Nginx"><NginxLogo /></div>

        <div class="language-logo" title="DigitalOcean">
          <DigitalOceanLogo />
        </div>
        <div class="language-logo" title="Google Cloud Platform">
          <GoogleCloudLogo />
        </div>

        <div class="language-logo" title="Amazon Web Services"><AwsLogo /></div>

        <div class="language-logo" title="Netlify"><NetlifyLogo /></div>
        <div class="language-logo" title="Ansible"><AnsibleLogo /></div>

        <div class="language-logo" title="GitHub"><GitHubLogo /></div>
        <div class="language-logo" title="GitLab"><GitlabLogo /></div>

        <div class="language-logo" title="Jenkins"><JenkinsLogo /></div>
        <div class="language-logo" title="Jira"><JiraLogo /></div>
      </div>
    </div>
  </section>
</template>

<script>
import PhpLogo from '~/assets/icons/languages/php.svg?inline'
import SymfonyLogo from '~/assets/icons/languages/symfony.svg?inline'
import GolangLogo from '~/assets/icons/languages/go.svg?inline'
import GitLogo from '~/assets/icons/languages/git.svg?inline'
import HtmlLogo from '~/assets/icons/languages/html5.svg?inline'
import JavaLogo from '~/assets/icons/languages/java.svg?inline'
import JavascriptLogo from '~/assets/icons/languages/javascript.svg?inline'
import MysqlLogo from '~/assets/icons/languages/mysql.svg?inline'
import PostgresLogo from '~/assets/icons/languages/postgres.svg?inline'
import RedisLogo from '~/assets/icons/languages/redis.svg?inline'
import NginxLogo from '~/assets/icons/languages/nginx.svg?inline'
import LinuxLogo from '~/assets/icons/languages/linux.svg?inline'
import AwsLogo from '~/assets/icons/languages/aws.svg?inline'
import NodeLogo from '~/assets/icons/languages/node.svg?inline'
import DockerLogo from '~/assets/icons/languages/docker.svg?inline'
import AnsibleLogo from '~/assets/icons/languages/ansible.svg?inline'
import DigitalOceanLogo from '~/assets/icons/languages/digitalocean.svg?inline'
import GoogleCloudLogo from '~/assets/icons/languages/google-cloud.svg?inline'
import TailwindcssLogo from '~/assets/icons/languages/tailwindcss.svg?inline'
import NuxtJsLogo from '~/assets/icons/languages/nuxt.svg?inline'
import ElasticLogo from '~/assets/icons/languages/elastic.svg?inline'
import GitHubLogo from '~/assets/icons/languages/github.svg?inline'
import GitlabLogo from '~/assets/icons/languages/gitlab.svg?inline'
import JenkinsLogo from '~/assets/icons/languages/jenkins.svg?inline'
import NetlifyLogo from '~/assets/icons/languages/netlify.svg?inline'
import KafkaLogo from '~/assets/icons/languages/apache-kafka.svg?inline'
import JiraLogo from '~/assets/icons/languages/jira.svg?inline'
export default {
  components: {
    PhpLogo,
    SymfonyLogo,
    GolangLogo,
    GitLogo,
    HtmlLogo,
    JavascriptLogo,
    JavaLogo,
    MysqlLogo,
    PostgresLogo,
    RedisLogo,
    NginxLogo,
    AwsLogo,
    GoogleCloudLogo,
    DockerLogo,
    NodeLogo,
    AnsibleLogo,
    DigitalOceanLogo,
    TailwindcssLogo,
    NuxtJsLogo,
    LinuxLogo,
    ElasticLogo,
    GitHubLogo,
    GitlabLogo,
    JenkinsLogo,
    NetlifyLogo,
    KafkaLogo,
    JiraLogo,
  },
}
</script>

<style lang="postcss">
#tech-stack svg {
  @apply mx-auto;

  max-width: 100px;
}

#tech-stack .language-logo {
  width: 120px;
  height: 120px;
  @apply flex items-center mr-8 mb-8;

  overflow: hidden;
}
</style>
