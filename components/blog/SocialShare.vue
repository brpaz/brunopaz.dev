<template>
  <div class="mt-8 flex">
    <div class="mr-2">
      <ShareNetwork
        network="twitter"
        :url="postShareUrl"
        :title="post.title"
        twitter-user="brunopaz88"
      >
        <TwitterShareButton
          width="100px"
          aria-hidden="true"
          alt="Share this post on Twitter"
          title="Share this post on Twitter"
        />
      </ShareNetwork>
    </div>

    <div class="mr-2">
      <ShareNetwork network="facebook" :url="postShareUrl" :title="post.title">
        <FacebookShareButton
          width="100px"
          aria-hidden="true"
          alt="Share this post on Facebook"
          title="Share this post on Facebook"
        />
      </ShareNetwork>
    </div>

    <div>
      <ShareNetwork network="linkedin" :url="postShareUrl" :title="post.title">
        <LinkedinShareButton
          width="100px"
          aria-hidden="true"
          alt="Share this post on Linkedin"
          title="Share this post on Linkedin"
        />
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
import TwitterShareButton from '~/assets/icons/twitter-share-button.svg?inline'
import FacebookShareButton from '~/assets/icons/facebook-share-button.svg?inline'
import LinkedinShareButton from '~/assets/icons/linkedin-share-button.svg?inline'
export default {
  components: { TwitterShareButton, FacebookShareButton, LinkedinShareButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postShareUrl() {
      return `${this.$config.baseURL}${this.$route.fullPath}`
    },
  },
}
</script>
