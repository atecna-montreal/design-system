export const borderColor = (theme) => ({
  ...theme("colors"),
  default: theme("colors.neutral1.quaternary", "currentColor"),
});

export const fontFamily = {
  default: ["Inter", "sans-serif"],
};

export const colors = {
  transparent: "transparent",
  current: "currentColor",
  blacK: "#000",
  white: "#fff",
  actions: "#FF6C58",
  neutral1: {
    primary: "#0B1D43",
    secondary: "#6B7894",
    tertiary: "#8892A8",
    quaternary: "#F4F5F5",
  },
  neutral2: "#EAE8E8",
  bgaction: "#FDEFED",
  bgneutral: {
    primary: "#FBFBFB",
    secondary: "#F9F6F6",
  },
};

export const boxShadow = {
  default: "0px 4px 12px rgba(11, 29, 67, 0.04)",
  primary:
    "0px 1.4113px 3.26536px rgba(255, 108, 88, 0.0285566), 0px 3.39155px 7.84712px rgba(255, 108, 88, 0.0348276), 0px 6.38599px 14.7754px rgba(255, 108, 88, 0.0375563), 0px 11.3915px 26.3568px rgba(255, 108, 88, 0.0402779), 0px 21.3066px 49.2976px rgba(255, 108, 88, 0.0464109), 0px 51px 118px rgba(255, 108, 88, 0.07)",
  secondary: "0px 1.4113px 3.26536px rgba(255, 108, 88, 0.0285566)",
  tertiary: "0px 1.4113px 3.26536px rgba(255, 108, 88, 0.0285566)",
};

export const purge = false;

export default {
  purge,
  theme: {
    colors,
    fontFamily,
    borderColor,
  },
  extend: {
    boxShadow,
  },
};
