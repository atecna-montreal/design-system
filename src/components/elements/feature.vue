<template>
  <div v-editable="blok" class="flex items-center py-6">
    <img :src="blok.icon" class="h-24 w-24 mr-8" />
    <h3 class="text-2xl">{{ blok.name }}</h3>
  </div>
</template>

<script>
export default {
  props: { blok: { type: Object, default: () => {} } }
}
</script>
