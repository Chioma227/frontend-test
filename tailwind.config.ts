import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        grey: "#888888",
        theme: "#DC4A2D",
        blue50: "#E7E7E7",
        grey300: "#4F4F4F",
        grey100: "#B0B0B0",
        black100: "#5D5D5D",
        black900: "#3D3D3D",
        opac100: "#FEF4F2",
        opac: "#FED3CA",
        "border-grey": "#E7E7E7",
      },
      colors: {
        grey: "#888888",
        theme: "#DC4A2D",
        blue50: "#E7E7E7",
        grey300: "#4F4F4F",
        grey100: "#B0B0B0",
        black100: "#5D5D5D",
        black900: "#3D3D3D",
        opac100: "#FEF4F2",
        opac: "#FED3CA",
        "border-grey": "#E7E7E7",
      },
      borderColor:{
        opac: "#FED3CA",
        theme: "#DC4A2D",
        gray:"#d1d1d164"
      },
      boxShadow:{
        shadow_md: "0px 10px 12px -14px rgba(0,0,0,0.1);"
      }
    },
  },
  plugins: [],
};
export default config;
