<template>
  <div v-editable="blok">
    <component
      :is="blokChild.component"
      v-for="blokChild in blok.content"
      :key="blokChild._uid"
      :blok="blokChild"
    ></component>
  </div>
</template>

<script>
export default {
  props: { blok: { type: Object, default: () => {} } }
}
</script>
