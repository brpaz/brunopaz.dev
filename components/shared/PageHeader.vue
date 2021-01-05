<template>
  <h1 class="font-bold text-4xl text-center text-secondary-600 mb-8">
    {{ text }}
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
