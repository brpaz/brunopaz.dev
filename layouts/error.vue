<template>
  <div class="flex flex-col text-center items-centertext-xl pt-6">
    <div v-if="error.statusCode === 404">
      <NotFound with="256" height="256" class="block mx-auto mb-8" />
      <b>The requested page was not found</b>
    </div>
    <div v-else><b>An error occurred</b></div>
  </div>
</template>

<script>
import NotFound from '~/assets/icons/404.svg?inline'

export default {
  components: {
    NotFound,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
