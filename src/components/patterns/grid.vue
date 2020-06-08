<template>
  <div v-editable="blok" class="mx-6 my-16 lg:my-40 lg:mx-64 lg:px-8">
    <e-descriptive-block v-if="blok.header.length" :blok="blok.header[0]" />
    <div class="my-16 lg:grid lg:grid-cols-2">
      <component
        :is="column.component"
        v-for="column in blok.columns"
        :key="column._uid"
        :blok="column"
        class="grid-item border-b border-neutral2"
      ></component>
    </div>
    <t-button
      v-if="blok.link && blok.cta"
      class="w-full"
      :to="blok.link.url"
      tertiary
    >
      {{ blok.cta }}
    </t-button>
  </div>
</template>

<script>
export default {
  props: { blok: { type: Object, default: () => {} } }
}
</script>

<style scoped>
/* Target the last row of the grid */
.grid-item:nth-child(2n):nth-last-child(-n + 3) ~ .grid-item {
  border-bottom: none;
}
</style>
