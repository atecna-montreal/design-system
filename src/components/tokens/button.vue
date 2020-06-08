<template>
  <component
    :is="type"
    :href="href"
    :to="to"
    :class="classes"
    @[event]="onClick"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    primary: Boolean,
    tertiary: Boolean
  },
  computed: {
    type() {
      if (this.to) {
        return 'nuxt-link'
      } else if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
    classes() {
      return {
        ...this.class,
        btn: true,
        'btn-primary': this.primary,
        'btn-secondary': this.secondary,
        'btn-tertiary': this.tertiary
      }
    },
    event() {
      return this.onClick ? 'click' : null
    }
  }
}
</script>
