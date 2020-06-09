<template>
  <li class="sitemap-item">
    <nuxt-link :to="'/' + model.item.slug">
      {{ model.item.name }}
    </nuxt-link>
    <ul v-if="model.children.length > 0">
      <p-sitemap-item
        v-for="item in model.children"
        :key="item.item.id"
        :model="item"
      >
      </p-sitemap-item>
    </ul>
  </li>
</template>

<script>
export default {
  props: { model: { type: Object, default: () => {} } }
}
</script>
