<script lang="ts">
  import type { Options } from "@splidejs/splide";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
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
        <img src={image} alt={`Project image ${++i}`} />
      </SplideSlide>
    {/each}
  </Splide>
</div>
