// ATOMS

import AH1 from "./components/atoms/a-h1.vue";
import AH2 from "./components/atoms/a-h2.vue";
import AH3 from "./components/atoms/a-h3.vue";
import AH4 from "./components/atoms/a-h4.vue";
import AH5 from "./components/atoms/a-h5.vue";
import AIcon from "./components/atoms/a-icon.vue";
import AInterfaceMedium from "./components/atoms/a-interface-medium.vue";
import AInterfaceRegular from "./components/atoms/a-interface-regular.vue";
import AInterfaceSmall from "./components/atoms/a-interface-small.vue";
import ALinkRegular from "./components/atoms/a-link-regular.vue";
import ALogoRegular from "./components/atoms/a-logo-regular.vue";
import ALogoImage from "./components/atoms/a-logo-image.vue";
import AButton from "./components/atoms/a-button.vue";
import AButtonText from "./components/atoms/a-button-text.vue";

// MOLECULES

import MCardExpertiseLeft from "./components/molecules/m-card-expertise-left.vue";
import MCardExpertiseRight from "./components/molecules/m-card-expertise-right.vue";

// ORGANISMS

import OFooter from "./components/organisms/o-header.vue";
import OHeader from "./components/organisms/o-footer.vue";

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("AH1", AH1);
  Vue.component("AH2", AH2);
  Vue.component("AH3", AH3);
  Vue.component("AH4", AH4);
  Vue.component("AH5", AH5);
  Vue.component("AIcon", AIcon);
  Vue.component("AInterfaceMedium", AInterfaceMedium);
  Vue.component("AInterfaceRegular", AInterfaceRegular);
  Vue.component("AInterfaceSmall", AInterfaceSmall);
  Vue.component("ALinkRegular", ALinkRegular);
  Vue.component("ALogoRegular", ALogoRegular);
  Vue.component("ALogoImage", ALogoImage);
  Vue.component("AButton", AButton);
  Vue.component("AButtonText", AButtonText);
  Vue.component("MCardExpertiseLeft", MCardExpertiseLeft);
  Vue.component("MCardExpertiseRight", MCardExpertiseRight);
  Vue.component("OFooter", OFooter);
  Vue.component("OHeader", OHeader);
}
