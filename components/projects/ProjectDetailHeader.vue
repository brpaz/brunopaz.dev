<template>
  <div class="mb-8 flex justify-center flex-wrap">
    <div class="flex mb-4 mr-6">
      <FolderIcon
        with="24"
        height="24"
        class="text-blue-600 mr-2"
        aria-hidden="true"
      />
      {{ project.category | capitalize }}
    </div>
    <div class="flex mb-4 mr-6">
      <CalendarIcon with="24" height="24" class="text-blue-600 mr-2" />
      {{ project.start_date }} - {{ project.end_date || 'current' }}
    </div>
    <div v-if="project.url" class="flex mb-4 mr-6">
      <GlobeIcon with="24" height="24" class="text-blue-600 mr-2" />
      <a :href="project.url" target="_blank">{{ project.url }}</a>
    </div>
  </div>
</template>

<script>
import CalendarIcon from '~/assets/icons/calendar.svg?inline'
import GlobeIcon from '~/assets/icons/globe.svg?inline'
import FolderIcon from '~/assets/icons/folder-open.svg?inline'
export default {
  components: { CalendarIcon, GlobeIcon, FolderIcon },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  filters: {
    capitalize(value) {
      value.toLowerCase().split(' ')
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
}
</script>
