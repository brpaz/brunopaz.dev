<template>
  <div class="fixed top-0 right-0 w-full" style="z-index:99999999999">
    <Transition name="slide-fade">
        <div
        v-if="message"
        :class="{
            'bg-red-200 text-red-900': message.type === 'error',
            'bg-green-200 text-green-900': message.type === 'success',
        }"
        class="shadow-md p-6 pr-10"
        >
        <button class="opacity-75 cursor-pointer absolute top-0 right-0 py-2 px-3 hover:opacity-100" @click.prevent="message = null">×</button>
        <div class="text-center">{{ message.text }}</div>
        </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    };
  }, mounted() {
       this.$root.$on('show-flash-message', data => {
          this.message = data;
          setTimeout(() => this.message=null, 3000);
      });
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-400px);
  opacity: 0;
}
</style>
