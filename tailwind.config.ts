import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto'],
    },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add your Google Font here
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        homeBanner: "url('/Img/homeBanner.jpg')",
        bannerBackground:"url('/image/computer.jpg')"
      }
    },
  },
  plugins: [
  ],
} satisfies Config;
