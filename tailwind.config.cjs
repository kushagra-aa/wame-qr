/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#030712",
      "primary-2": "#2a102e",
      secondary: "#99f6e4",
      accent: "#2dd4bf",
      teal: {
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        950: "#042f2e",
      },
      gray: {
        700: "#374151",
      },
      transparent: "transparent",
    },
    extend: {
      animation: {
        "spin-real-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
