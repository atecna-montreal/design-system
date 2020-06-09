const path = require("path");

module.exports = {
  title: "Atecna | Design system",
  description: "Atecna Design system",
  plugins: [
    [
      "docgen",
      {
        globalName: "",
        componentsDir: path.join(__dirname, "../../components"),
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Components", link: "/components/atoms/a-button.html" },
      {
        text: "Github",
        link: "https://github.com/f3ltron/vuepress-plugin-docgen",
      },
    ],
  },
};
