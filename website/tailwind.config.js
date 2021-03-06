const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {},
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      textColor: ["hover", "focus"],
    },
  },
  purge: {
    content: ["./src/**/*.svelte","./src/*.svelte","./public/index.html"],
    enabled: production, // disable purge in dev
  },
};
