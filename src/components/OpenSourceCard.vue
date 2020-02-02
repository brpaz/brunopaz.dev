<template>
  <div
    class="mb-8 mx-auto shadow-lg cursor-pointer border border-gray-300"
    style="width: 290px; height: 200px;"
  >
    <a :href="item.url" target="_blank" rel="noopener">
      <div class="px-4 py-4">
        <h3 class="mb-4 truncate">{{ item.name }}</h3>
        <div
          class="text-sm text-copy-primary mb-4 overflow-hidden"
          style="height:65px;"
        >
          {{ item.description }}
        </div>
        <div class="flex justify-end w-full">
          <div class="flex justify-between w-full">
            <div class="flex rounded-lg bg-secondary text-sm text-white p-2">
              {{ item.language }}
            </div>

            <div class="flex items-center text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                class="text-gray-800 mr-1"
                width="16"
                height="16"
                title="GitHub stars"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
              <span class="text-xs pt-1">{{ item.stars }}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'OpenSourceCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
