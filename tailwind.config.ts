import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        heroBackground:"url('/image/myself.png')",
        bannerBackground:"url('/image/banner.jpg')"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
} satisfies Config;
