/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#fbfdfe",
        background: "#05080a",
        primary: "#6bc2a1",
        secondary: "#1d0344",
        accent: "#ef2572",
      },
    },
  },
  plugins: [],
};
