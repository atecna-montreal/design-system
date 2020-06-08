<template>
  <div>
    <button
      class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
      @click="navIsOpen(!open)"
    >
      <span v-show="!open">Menu</span>
      <svg
        v-show="open"
        fill="currentColor"
        viewBox="0 0 20 20"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <nav
      class="fixed z-40 inset-0 mt-20 pb-40 bg-bgneutral-primary w-full h-full flex-col justify-end pb-4 divide-y divide-neutral1-quaternary lg:divide-y-0 lg:relative lg:mt-0 lg:pb-0 lg:flex lg:justify-end lg:flex-row lg:items-center"
      :class="{ flex: open, hidden: !open }"
    >
      <nuxt-link
        v-if="contactLink"
        class="flex justify-between px-10 py-5 text-xl lg:btn lg:btn-secondary lg:mr-6 lg:px-6 lg:py-4 lg:text-base"
        :class="{ 'lg:hidden': !showContactLink, 'lg:flex': showContactLink }"
        :to="localePath(contactLink.link.cached_url)"
      >
        {{ contactLink.name }} <t-icon type="arrow_forward" class="lg:hidden" />
      </nuxt-link>
      <nuxt-link
        v-for="(navitem, index) in navItems"
        :key="index"
        class="nav-link flex justify-between px-10 py-5 text-xl lg:px-6 lg:py-4 lg:text-base"
        :to="localePath(navitem.link.cached_url)"
      >
        {{ navitem.name }} <t-icon type="arrow_forward" class="lg:hidden" />
      </nuxt-link>
      <p-lang-switcher />
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContactLink: false
    }
  },
  computed: {
    open() {
      return this.$store.state.navIsOpen
    },
    contactLink() {
      return this.$store.state.settings.main_navi.find(
        (item) => item.component === 'Contact Item'
      )
    },
    navItems() {
      return this.$store.state.settings.main_navi.filter(
        (item) => item.component !== 'Contact Item'
      )
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    navIsOpen(status) {
      this.$store.commit('setNavIsOpen', status)
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (currentScrollPosition < 120) {
        this.showContactLink = false
        return
      }
      this.showContactLink = true
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.navIsOpen
          ? 'overflow-hidden lg:overflow-auto'
          : ''
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .nav-link:not(:last-of-type)::after {
    content: '•';
    margin-left: 1rem;
  }
}
</style>
