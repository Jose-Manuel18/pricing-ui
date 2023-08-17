import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //! DO NOT ADD ANYTHING HERE BECAUSE IT WILL DISABLED ALL THE DEFAULT TAILWIND CLASSES, ADD ONLY THE EXTEND
    extend: {
      colors: {
        primary: "#2f2b43",
        secondary: "#6d697a",
      },
      backgroundColor: {
        primary: "#8249ff",
        secondary: "#2f2b43",
      },
      borderColor: {
        primary: "#d0c6e7",
      },
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
