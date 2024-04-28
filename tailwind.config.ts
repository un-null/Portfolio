import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      backgroundColor: {
        "notion-blue": "#0078DF",
        "notion-gray": "#9B9A97",
      },
    },
  },
  plugins: [require("tailwindcss-radix-colors")],
};
export default config;
