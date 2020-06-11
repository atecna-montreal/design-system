<template>
  <div v-editable="block">
    <img v-if="block.icon" :src="block.icon" class="w-12 h-12" />
    <h2 v-if="block.title" class="my-6 text-xl font-medium">
      {{ block.title }}
    </h2>
    <div v-html="description"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  props: { block: { type: Object, default: () => {} } },
  computed: {
    description() {
      return this.block.description && marked(this.block.description);
    }
  }
};
</script>
