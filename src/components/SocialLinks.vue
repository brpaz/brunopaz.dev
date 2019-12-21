<template>
 <ul class="flex">
  <li :class="listItemClass" v-for="link in links" :key="link.key">
          <a :href="link.url" target="_blank" rel="noopener" :title="link.title" >
            <svg :width="iconWidth" :height="iconHeight" :class="iconClass" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" v-html="link.icon"></svg>
          </a>
    </li>
</ul>
</template>

<script>
import links from "~/data/social.yml";
export default {
  name: 'SocialLinks',
  props: {
      iconWidth: {
          type: String,
          default: "24"
      },
      iconHeight: {
          type: String,
          default: "24"
      },
      iconClass: {
          type: String,
          default: ""
      },
      listItemClass: {
          type: String,
          default: "mr-8"
      }     
  },
  data() {
    return {
      links
    }
  },
} 
</script>
