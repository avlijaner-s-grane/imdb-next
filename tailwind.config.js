const {heroui} = require('@heroui/theme');
module.exports = {
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
  plugins: [heroui()],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/spinner.js"
  ],
    // Add this options block:
    options: {
      safelist: [],
      blocklist: [/^dark:/], // Prevents dark mode media queries
    },
  },
};
