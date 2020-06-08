<template>
  <div v-editable="blok" class="h-auto p-4 lg:mt-10">
    <h2 class="text-3xl mt-4 mb-8 lg:mx-48 lg:text-6xl lg:my-8">
      {{ blok.headline }}
    </h2>
    <t-button v-if="blok.link" class="lg:mx-48" primary :to="blok.link.url">
      {{ blok.cta }}
    </t-button>
    <img
      v-if="blok.image"
      class="my-8 w-full max-w-full lg:px-20"
      :src="blok.image.image"
      :alt="blok.image.alt_tag"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
