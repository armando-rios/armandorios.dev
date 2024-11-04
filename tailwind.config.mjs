/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: "#1e1e2e",
        mantle: "#181825",
        crust: "#11111b",
        text: "#cdd6f4",
        subtext: "#a6adc8",
        overlay0: "#6c7086",
        surface0: "#313244",
        surface1: "#45475a",
        blue: "#89b4fa",
        lavender: "#b4befe",
        sapphire: "#74c7ec",
        sky: "#89dceb",
        mauve: "#cba6f7",
        green: "#a6e3a1",
        yellow: "#f9e2af",
      },
    },
  },
  plugins: [],
};
