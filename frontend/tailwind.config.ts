import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // color: {
      //   "secondary-bg": "rgb(250, 250, 250)",
      //   'modal': "rgba(0, 0, 0, 0.3)",
      // },
      keyframes: {
        like: {
          "0%, 100%": { fontSize: "190%", padding: "3" },
          "50%": { fontSize: "210%", padding: "0" },
        },
      },
      backgroundColor: {
        modal: "rgba(0, 0, 0, 0.6)",
      },
    },
    // container: {
    //   center: true
    // }
  },
  plugins: [],
};
export default config;
