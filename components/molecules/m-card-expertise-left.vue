<template>
  <div class="card-wrapper">
    <div class="card-left">
      <a-icon name="training" class="card-left-element" />
    </div>
    <div class="card-right">
      <a-h3>{{ card.title }}</a-h3>
      <a-interface-regular class="card-right-content">{{ card.content }}</a-interface-regular>
      <a-interface-regular v-html="card.list" class="card-right-list" />
      <a-button @click.native="$emit('actionClicked')" secondary>{{ card.button_text }}</a-button>
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

.card-right-content {
  color: #6b7894;
  margin-bottom: 2.5rem;
}

.card-right {
  width: 60%;
  padding: 0 4rem 5rem 4rem;
}

.card-right-list {
  margin-bottom: 2.5rem;
}

.card-left {
  width: 40%;
  position: relative;
}

.card-left-element {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

<docs>
<div style="background: grey; padding: 16px;">
  <m-card-expertise-left  :card="{ title: 'Titre', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim ', list: 'Lorem ipsum dolor sit amet <br /> Lorem ipsum dolor sit amet', button_text: 'En savoir plus'}" />
</div>

```vue live
    <m-card-expertise-left :card="{ title: 'Titre', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim ', list: 'Lorem ipsum dolor sit amet <br /> Lorem ipsum dolor sit amet', button_text: 'En savoir plus'}" />
```
</docs>
