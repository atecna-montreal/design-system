<template>
  <button class="button" :class="regroupClass()">
    <a-button-text>
      <slot />
    </a-button-text>
  </button>
</template>

<script>
import AButtonText from "./a-button-text";
export default {
  components: {
    AButtonText
  },
  props: {
    primary: {
      default: true,
      type: Boolean
    },
    secondary: {
      default: false,
      type: Boolean
    },
    tertiary: {
      default: false,
      type: Boolean
    },
    quaternary: {
      default: false,
      type: Boolean
    },
    small: {
      default: false,
      type: Boolean
    },
    medium: {
      default: true,
      type: Boolean
    },
    large: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    regroupClass() {
      return `${this.getTypeButton()} ${this.getSizeButton()}`;
    },
    getTypeButton() {
      if (this.secondary) return "secondary";
      if (this.tertiary) return "tertiary";
      if (this.quaternary) return "quaternary";
      if (this.primary) return "primary";
    },
    getSizeButton() {
      if (this.small) return "small";
      if (this.large) return "large";
      if (this.medium) return "medium";
    }
  }
};
</script>

<style scoped>
.button {
  border-radius: 0.5rem;
  cursor: pointer;
}

.primary {
  background: radial-gradient(50% 50% at 50% 50%, #ff6c58 0%, #ff7458 100%);
  color: #ffffff;
  border: 1px solid #ff6c58;
  box-shadow: 0px 1.4113px 3.26536px rgba(255, 108, 88, 0.0285566),
    0px 3.39155px 7.84712px rgba(255, 108, 88, 0.0348276),
    0px 6.38599px 14.7754px rgba(255, 108, 88, 0.0375563),
    0px 11.3915px 26.3568px rgba(255, 108, 88, 0.0402779),
    0px 21.3066px 49.2976px rgba(255, 108, 88, 0.0464109),
    0px 51px 118px rgba(255, 108, 88, 0.07);
}

.secondary {
  background: #fdefed;
  color: #ff6c58;
  border: 1px solid #fdefed;
  box-shadow: 0px 1.4113px 3.26536px rgba(255, 108, 88, 0.0285566);
}

.tertiary {
  color: #ff6c58;
  border: 1px solid #ff6c58;
  box-shadow: 0px 1.4113px 3.26536px rgba(255, 108, 88, 0.0285566);
  background: #ffffff;
}

.quaternary {
  color: #ff6c58;
  border: none;
  background: #ffffff;
}

.text-grey {
  color: #8892a8 !important;
}

.small {
  padding: 0.75rem 1.5rem;
}

.medium {
  padding: 1rem 1.5rem;
}

.large {
  padding: 1.25rem 1.5rem;
}
</style>

<docs>
<div style="margin-top: 16px">
  <a-button>Button</a-button>
  <a-button secondary>Button</a-button>
  <a-button tertiary>Button</a-button>
  <a-button quaternary>Button</a-button>
</div>
<div style="margin-top: 16px">
  <a-button small>Button</a-button>
  <a-button>Button</a-button>
  <a-button large>Button</a-button>
</div>



```vue live
  <a-button>Button</a-button>
  <a-button secondary>Button</a-button>
  <a-button tertiary>Button</a-button>
  <a-button quaternary>Button</a-button>

  // size
  <a-button>Button</a-button>
  <a-button medium>Button</a-button>
  <a-button large>Button</a-button>
```
</docs>
