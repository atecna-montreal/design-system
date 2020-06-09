<template>
  <div>
    <svg style="position:absolute;width:0;height:0;visibility:hidden">
      <defs>
        <symbol id="arrow_forward" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          />
        </symbol>
      </defs>
    </svg>
    <svg width="1em" height="1em">
      <use :xlink:href="href"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  computed: {
    href() {
      return `#${this.type}`;
    },
  },
};
</script>
