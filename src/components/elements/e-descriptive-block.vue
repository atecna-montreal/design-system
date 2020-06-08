<template>
  <div v-editable="blok" class="">
    <img v-if="blok.icon" :src="blok.icon" class="w-12 h-12" />
    <h2 v-if="blok.title" class="my-6 text-xl font-medium">{{ blok.title }}</h2>
    <div v-html="description"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: { blok: { type: Object, default: () => {} } },
  computed: {
    description() {
      return this.blok.description && marked(this.blok.description)
    }
  }
}
</script>
