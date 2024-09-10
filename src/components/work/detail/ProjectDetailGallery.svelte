<!-- <script lang="ts">
  import type { Options } from "@splidejs/splide";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  export let images = [];

  const options: Options = {
    rewind: true,
    perPage: 1,
    lazyLoad: true,
  };
</script>

<div class="mb-8">
  <Splide {options}>
    {#each images as image, i}
      <SplideSlide>
        <img
          width="1280"
          src={image}
          alt={`Project image ${++i}`}
          style="margin: 0 auto;"
        />
      </SplideSlide>
    {/each}
  </Splide>
</div> -->

<style global>
  .splide__arrow:disabled {
    opacity: 0;
  }
</style>
