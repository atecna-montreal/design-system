<template>
  <nav
    v-on-clickaway="away"
    class="relative mx-10 lg:mx-0 lg:flex lg:items-center"
  >
    <button
      class="w-full lg:flex items-center lg:ml-8"
      @click="dropdownIsVisible = !dropdownIsVisible"
    >
      <span class="hidden capitalize lg:flex lg:items-center">
        {{ $i18n.locale }}
        <svg
          class="ml-2"
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#0B1D43" />
        </svg>
      </span>
      <span
        class="lg:hidden display flex w-full items-center justify-between py-5 text-xl"
      >
        {{ currentLocale.name }}
        <svg
          class="ml-2"
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#0B1D43" />
        </svg>
      </span>
    </button>
    <div
      class="lang-switcher__dropdown absolute right-0 bg-bgneutral-primary border shadow rounded-sm w-32"
      :class="{ hidden: !dropdownIsVisible }"
    >
      <nuxt-link
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="block lg:px-4 py-1"
        :class="{
          'bg-bgneutral-primary': locale.code === $i18n.locale
        }"
        @click.native="loadSettings(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [clickaway],
  data() {
    return {
      dropdownIsVisible: false,
      currentLocale: this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    }
  },
  methods: {
    loadSettings(locale) {
      this.$store.dispatch('loadSettings', {
        version: this.$store.version,
        locale
      })
    },
    away() {
      this.dropdownIsVisible = false
    }
  }
}
</script>

<style scoped>
.lang-switcher__dropdown {
  top: 100%;
}
</style>
