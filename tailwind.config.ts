import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  safelist: [
    {
      pattern: /.+/,
    },
    {
      pattern: /from-(.+)-500/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /to-(.+)-500/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /bg-(.+)-(.+)/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
