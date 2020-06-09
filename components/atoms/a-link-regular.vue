<template>
  <nuxt-link :to="to" class="link-regular"><slot /></nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.link-regular {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  text-decoration-line: underline;
}
</style>

<docs>
  <a-link-regular to="https://atecna.ca">regular link</a-link-regular>
  ```vue live
    <a-link-regular to="https://atecna.ca">regular link</a-link-regular>
  ```
</docs>
