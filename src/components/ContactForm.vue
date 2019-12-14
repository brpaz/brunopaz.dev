<template>
  <section id="contact" class="bg-background-secondary pt-16 pb-16">
    <div class="container container-lg">
      <h2 class="mb-16">
        <svg
          class="inline"
          aria-hidden="true"
          focusable="false"
          width="42"
          height="42"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
          />
        </svg>
        Contact me
      </h2>

      <div class="container-inner mx-auto text-xl pb-4 relative">
        <div class="absolute right-0 top-0 sm:hidden lg:block" style="transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <p class="mb-12">Do you have any questions? Feel free to reach me using the form below:</p>

        <div class="text-lg sm:text-lg mb-16">
          <form name="contact" method="POST" class="mb-12" data-netlify="true" netlify-honeypot="pikachu"  @submit.prevent="handleSubmit">
            <div class="flex flex-wrap mb-6 -mx-4">
              <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                <label class="block mb-2 text-copy-primary" for="name">Name</label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-secondary mb-2 p-4"
                  required
                />
              </div>

              <div class="w-full px-4 md:w-1/2">
                <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-secondary mb-2 p-4"
                  required
                />
              </div>
            </div>

            <div class="w-full mb-12">
              <label class="block text-copy-primary mb-2" for="message">Message</label>

              <textarea
                id="message"
                rows="5"
                name="message"
                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-secondary mb-2 px-4 py-4"
                placeholder="Enter your message here."
                required
              ></textarea>
            </div>

             <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="pikachu" /></label>
            </p>
            <div class="flex justify-end w-full">
              <input
                type="submit"
                value="Submit"
                class="block bg-primary hover:bg-secondary text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>  
import axios from 'axios';
export default {
  name: 'ContactForm',
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      ).then(() => {
        alert("Form submited with success");
      })
      .catch((e) => {
        alert("Form submit failed");
        throw e;
      })
    }
  }
};
</script>
