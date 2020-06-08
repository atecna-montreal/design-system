<template>
  <header
    class="px-4 py-8 fixed w-full top-0 left-0 z-50 bg-bgneutral-primary flex items-center justify-between lg:px-8"
  >
    <nuxt-link :to="localePath(`/`)" exact class="h-4 lg:h-6">
      <t-logo />
    </nuxt-link>
    <p-header-navigation />
  </header>
</template>
