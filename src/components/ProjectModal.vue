<template>
  <div class="project-modal p-4">
    <div class="flex justify-end text-gray-600">
      <button title="Close" @click="$emit('close')">
        <svg
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          />
        </svg>
      </button>
    </div>

    <div>
      <div
        style="width:100%;height:200px;"
        class="flex items-center overflow-hidden mb-4"
      >
        <g-image class="mx-auto" :src="getCoverImage()" />
      </div>
      <h3 class="mb-1">{{ project.name }}</h3>

      <div
        class="text-gray-600 text-sm"
        v-if="project.start_date || project.end_date"
      >
        {{ project.start_date }} -
        <span v-if="project.end_date">{{ project.end_date }}</span>
        <span v-else>Current</span>
      </div>

      <div class="mt-4 mb-4" v-html="project.description"></div>

      <div>
        <div class="mb-4 font-bold">Technologies:</div>

        <div class="flex flex-wrap">
          <span
            class="rounded-lg bg-secondary p-2 mr-2 mb-4 text-xs text-white"
            v-for="(item, index) in project.technologies"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCoverImage() {
      return require(`~/assets/projects/${this.project.cover_image}`);
    }
  }
};
</script>

<style>
.project-modal ul {
  list-style-type: circle;
  @apply pl-8 pt-4;
}

.project-modal ul li {
  @apply pb-2;
}
</style>
