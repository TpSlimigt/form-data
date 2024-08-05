import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // https://uicolors.app/create for color gradiants
      colors: {
        blue: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae7fd',
          '300': '#7ed4fb',
          '400': '#39bff7',
          '500': '#0fa7e8',
          '600': '#038ed3',
          '700': '#046aa0',
          '800': '#085a84',
          '900': '#0c4b6e',
          '950': '#083049',
        },
      },
    },
  },
  plugins: [],
};
export default config;
