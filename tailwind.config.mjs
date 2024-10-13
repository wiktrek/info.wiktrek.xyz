/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#eaebed",
        background: "#090a10",
        primary: "#99a1db",
        secondary: "#192682",
        accent: "#3950f3",
      },
    },
  },
  plugins: [],
};
