<template>
  <div class="text-center w-4/5 lg:w-2/3 mx-auto">
    <page-header text="Contact" />
    <ContactIcon
      class="m4-8 mt-4 mx-auto"
      width="128px"
      height="128px"
      aria-hidden="true"
      title="Hi There!"
    />

    <p class="mb-16">Feel free to reach me using the form below:</p>

    <form
      ref="contactForm"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="eegee3EB"
      class="w-full max-w-lg mx-auto"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 justify-between mb-4 md:pr-4">
          <label
            class="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
          >
            Name <span class="text-red-600"> * </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required="required"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div class="w-full md:w-1/2">
          <label
            class="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email address <span class="text-red-600"> * </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="message"
          >
            Message <span class="text-red-600"> * </span>
          </label>
          <textarea
            id="message"
            name="message"
            required="required"
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
          ></textarea>
        </div>
      </div>

      <div class="mb-4">
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600 transition ease-in-out duration-150"
          :disabled="loading"
          :class="{ 'cursor-not-allowed': loading }"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Send
        </button>

        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label
            >Don’t fill this out if you’re human: <input name="eegee3EB"
          /></label>
        </p>
      </div>

      <div v-if="submitSuccess" class="text-green-600">
        Thanks for your message. I will reach you shortly.
      </div>
      <div v-if="hasErrors" class="text-red-600">
        An error occurred when submitting the form.
      </div>
    </form>
  </div>
</template>

<script>
import PageHeader from '~/components/shared/PageHeader'
import ContactIcon from '~/assets/icons/email.svg?inline'
export default {
  components: { PageHeader, ContactIcon },
  data() {
    return {
      loading: false,
      hasErrors: false,
      submitSuccess: false,
    }
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    async handleSubmit(e) {
      this.hasErrors = false
      this.submitSuccess = false
      this.loading = true

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.encode({
          'form-name': event.target.getAttribute('name'),
          ...name,
        }),
      })

      this.loading = false

      if (response.ok) {
        this.$refs.contactForm.reset()
        this.submitSuccess = true
      } else {
        this.hasErrors = true
      }
    },
  },
  head() {
    return {
      title: 'Contact | Bruno Paz',
    }
  },
}
</script>
