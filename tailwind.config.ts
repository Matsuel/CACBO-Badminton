import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gap: {
        30: "30px",
      },
      fontSize: {
        20: "20px",
      },
      padding: {
        horizontal: "20px",
        vertical: "6px",
      },
      borderRadius: {
        ten: "10px",
      },
      borderWidth: {
        1: "1.5px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        redcolor: "var(--redcolor)",
        blackcolor: "var(--blackcolor)",
        whitebroken: "var(--white-broken)",
      },
    },
  },
  plugins: [],
};
export default config;
