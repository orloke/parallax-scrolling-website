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
        "gradient-body": "linear-gradient(#2b1055,#7597de)",
        "gradient-before": "linear-gradient(to top, #1c0522,transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
