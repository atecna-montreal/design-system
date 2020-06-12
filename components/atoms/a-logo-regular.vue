<template>
  <svg width="104" height="24" viewBox="0 0 104 24" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M38.4599 13.7122V13.5864H38.5824H44.4262V10.1197H38.5824H38.4599V9.99388V6.87435V6.74852H38.5824H45.2194V2.5H34.0605V21.5H45.4541V17.4656H38.5824H38.4599V17.3398V13.7122Z"
      :fill="getColor()"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M32.7949 6.75056V2.5H17.6035V6.75056H22.8413H22.9671V6.87638V21.5H27.4578V6.87638V6.75056H27.584H32.7949Z"
      :fill="getColor()"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.61447 19.0035H7.69507H15.1334H15.2144L15.2481 19.077L16.3195 21.3768H20.8288V20.83L18.1805 15.104H13.5437H9.2851H9.09394L9.16863 14.9279L11.2705 9.96603L11.3861 9.69413L11.5039 9.96519L12.7825 12.897L16.2102 10.8392L12.3837 2.56799L9.66531 4.19985L2 20.83V21.3768H6.5093L7.58029 19.077L7.61447 19.0035Z"
      :fill="getColor()"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M46.6035 12.066C46.6301 18.4638 51.5264 21.3784 56.0648 21.3784H56.1272C59.8837 21.3784 64.1428 19.4907 64.907 14.2079H60.4188C59.8938 16.1129 58.2971 17.247 56.1281 17.247C53.3438 17.2208 51.3238 15.0418 51.3238 12.0656C51.3238 8.85293 53.254 6.69413 56.1281 6.69413C57.8704 6.69413 59.1436 7.3359 59.9132 8.60129L63.6761 6.34243C62.1755 3.97295 59.3647 2.56274 56.1281 2.56274C53.6506 2.56274 51.3331 3.40844 49.6017 4.94489C47.6526 6.67471 46.6158 9.13708 46.6035 12.066Z"
      :fill="getColor()"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M85.683 15.1637H85.6813L83.0107 20.9481V21.5H87.5581L88.6383 19.1772L88.6727 19.103H88.7544H96.2562H96.3375L96.372 19.1772L97.4521 21.5H102V20.9481L94.2696 4.14848L91.5271 2.5L85.683 15.1637ZM92.4149 9.97213L92.5336 9.69873L92.6503 9.97341L94.7705 14.9854L94.8458 15.1637H94.6526H90.3581H90.1614L92.4149 9.97213Z"
      :fill="getColor()"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M77.2445 2.5V12.11L68.5348 3.3636L66.1318 4.80549V21.5H70.6214V11.942L79.9863 21.4974H81.7451V2.5H77.2445Z"
      :fill="getColor()"
    />
  </svg>
</template>

<script>
export default {
  props: {
    black: {
      type: Boolean,
      default: true
    },
    orange: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getColor() {
      if (this.orange) return "#FF6C58";
      if (this.black) return "#000000";
    }
  }
};
</script>

<docs>
<a-logo-regular />
<a-logo-regular orange/>
<a-logo-regular orange style="width: 100px;"/>

```vue live
<a-logo-regular orange/>
<a-logo-regular />

// you can easy override the width
<a-logo-regular orange style="width: 100px;"/>

```
</docs>

<style scoped>
svg {
  max-height: 100%;
  max-width: 100%;
}
</style>
