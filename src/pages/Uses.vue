<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2>Uses</h2>

      <p class="mb-8">
        This page is inspired by
        <a href="https://wesbos.com/" target="_blank" rel="noopener nofollow"
          >Wes Bos</a
        >&nbsp;
        <a href="https://uses.tech" target="_blank" rel="noopener nofollow"
          >uses pages</a
        >
        and contains my detailed setup and tools that I use for Development.
      </p>

      <div v-for="section in uses" :key="section.id" class="mb-8">
        <h3>{{ section.title }}</h3>

        <p class="mb-4">{{ section.description }}</p>

        <ul class="list-disc pl-8">
          <li
            v-for="sectionItem in section.items"
            :key="sectionItem.name"
            class="pb-4"
          >
            <a :href="sectionItem.url">{{ sectionItem.name }}</a> -
            {{ sectionItem.description }}
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
import uses from '~/data/uses.yml';
export default {
  components: {},
  data() {
    return {
      uses
    };
  }
};
</script>
