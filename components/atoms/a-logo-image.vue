<template>
  <svg width="52" height="58" viewBox="0 0 52 58" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.0477 0.669873C26.5007 -0.223291 24.5948 -0.223291 23.0477 0.669873L2.5 12.5331C0.952994 13.4263 0 15.0769 0 16.8632V40.5897C0 42.3761 0.952995 44.0267 2.5 44.9199L23.0477 56.7831C24.5948 57.6763 26.5007 57.6763 28.0477 56.7831L48.5955 44.9199C50.1425 44.0267 51.0955 42.3761 51.0955 40.5897V16.8632C51.0955 15.0769 50.1425 13.4263 48.5955 12.5331L28.0477 0.669873ZM19.7402 36.582H19.6172L19.565 36.6958L17.9304 40.2605H11.0477V39.413L22.7474 13.6363L26.8966 11.1069L32.7371 23.9272L27.5052 27.1169L25.5537 22.5725L25.374 22.1524L25.1975 22.5738L21.9893 30.2647L21.8753 30.5376H22.1671H28.6671H35.7443L39.7865 39.413V40.2605H32.9039L31.2686 36.6958L31.2171 36.582H31.0934H19.7402Z"
      :fill="getColor()"
    />
  </svg>
</template>

<script>
export default {
  props: {
    black: {
      type: Boolean,
      default: true,
    },
    orange: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getColor() {
      if (this.orange) return "#FF6C58";
      if (this.black) return "#000000";
    },
  },
};
</script>

<docs>
<a-logo-image />
<a-logo-image orange/>

```vue live
<a-logo-image orange/>
<a-logo-image />
```
</docs>

<style scoped>
svg {
  max-height: 100%;
  max-width: 100%;
}
</style>
