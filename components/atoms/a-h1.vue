<template>
  <h1><slot /></h1>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-style: normal;
  font-weight: normal;
  font-size: 3.5rem;
  line-height: 4.25rem;
}

.medium {
  font-weight: 500;
}

.light {
  font-weight: 300;
}
</style>

<docs>
<a-h1>H1 Title</a-h1>
```vue live
  <a-h1>H1 Title</a-h1>
```
</docs>
