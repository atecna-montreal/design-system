<template>
  <div
    v-editable="blok"
    class="px-4 my-4 text-xl bg-bgneutral-secondary lg:bg-transparent"
  >
    <div
      class="bg-white rounded-lg px-6 pt-6 lg:flex lg:mx-48 lg:relative lg:z-0"
    >
      <div class="mb-10 lg:flex-1 lg:ml-24 lg:my-24">
        <e-descriptive-block :blok="topBlok" />
      </div>
      <img
        class="m-auto lg:flex-1 lg:mt-24 lg:mr-24 lg:-ml-32 lg:-mb-16"
        :src="topBlok.image"
      />
    </div>
    <div
      class="mt-16 mx-6 lg:bg-bgneutral-secondary lg:pt-64 lg:-mt-64 lg:mx-32"
    >
      <div class="lg:flex lg:p-40">
        <div class="mb-10 lg:w-3/5 lg:mr-40">
          <e-descriptive-block :blok="bottomBlok" />
        </div>
        <img
          class="m-auto lg:w-2/5 lg:ml-24 lg:-mr-48 lg:-mb-48"
          :src="bottomBlok.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { blok: { type: Object, default: () => {} } },
  computed: {
    topBlok() {
      return this.blok.body && this.blok.body[0]
    },
    bottomBlok() {
      return this.blok.body && this.blok.body[1]
    }
  }
}
</script>

<style>
.blok-body h3 {
  font-weight: 500;
  margin-bottom: 1.5rem;
}
</style>
