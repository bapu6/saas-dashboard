import type { Config } from "tailwindcss";
import {colors} from "./utils/constants"
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors,
    },
  },
  plugins: [],
};
export default config;
