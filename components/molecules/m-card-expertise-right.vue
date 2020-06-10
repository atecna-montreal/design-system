<template>
  <div class="card-wrapper">
    <div class="card-left">
      <a-h3>{{ card.title }}</a-h3>
      <a-interface-regular class="card-left-content">{{ card.content }}</a-interface-regular>
      <a-interface-regular v-html="card.list" class="card-left-list" />
      <a-button @click.native="$emit('actionClicked')" secondary>{{ card.button_text }}</a-button>
    </div>
    <div class="card-right">
      <a-icon name="coding" class="card-right-element" />
    </div>
  </div>
</template>

<script>
import AIcon from "../atoms/a-icon";
import AButton from "../atoms/a-button";
import AH3 from "../atoms/a-h3";
import AInterfaceRegular from "../atoms/a-interface-regular";

export default {
  components: {
    AIcon,
    AButton,
    AInterfaceRegular,
    AH3
  },
  props: {
    card: {
      type: Object,
      default: () => ({ title: "", content: "", list: "", button_text: "" })
    }
  }
};
</script>

<style scoped>
.card-wrapper {
  display: flex;
  border-radius: 1rem;
  background: white;
  position: relative;
}

.card-left-content {
  color: #6b7894;
  margin-bottom: 2.5rem;
}

.card-left {
  width: 60%;
  padding: 4rem 0 4rem 5rem;
}

.card-left-list {
  margin-bottom: 2.5rem;
}

.card-right {
  width: 40%;
  position: relative;
}

.card-right-element {
  position: absolute;
  bottom: -54px;
  right: 30px;
  width: 240px;
  height: 280px;
}
</style>

<docs>
<div style="background: grey; padding: 16px;">
  <m-card-expertise-right  :card="{ title: 'Titre', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim ', list: 'Lorem ipsum dolor sit amet <br /> Lorem ipsum dolor sit amet', button_text: 'En savoir plus'}" />
</div>

```vue live
    <m-card-expertise-right :card="{ title: 'Titre', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim ', list: 'Lorem ipsum dolor sit amet <br /> Lorem ipsum dolor sit amet', button_text: 'En savoir plus'}" />
```
</docs>
