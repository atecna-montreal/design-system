<template>
  <p class="interface" :class="getSize()"><slot /></p>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false,
    },
    regular: {
      type: Boolean,
      default: true,
    },
    medium: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getSize() {
      if (this.light) return "light";
      if (this.medium) return "medium";
      if (this.regular) return "regular";
    },
  },
};
</script>

<style scoped>
.interface {
  font-style: normal;
  line-height: 2rem;
  font-size: 1.25rem;
}

.light {
  font-weight: 300;
}

.medium {
  font-weight: 700;
}

.regular {
  font-weight: 500;
}
</style>

<docs>
  <a-interface-medium light >interface Title light</a-interface-medium>
  <a-interface-medium>interface Title</a-interface-medium>
  <a-interface-medium medium >interface Title medium</a-interface-medium>
  ```vue live
    <a-interface-medium light >interface Title light</a-interface-medium>
    <a-interface-medium>interface Title</a-interface-medium>
    <a-interface-medium medium >interface Title medium</a-interface-medium>
  ```
</docs>
