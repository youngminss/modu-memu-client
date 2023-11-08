import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "primary-50": "#FDF0F0",
        "primary-100": "#FFD8D6",
        "primary-200": "#FFB7B5",
        "primary-300": "#FF8C89",
        "primary-400": "#FC665D",
        "primary-500": "#FF604A",
        "primary-600": "#F44830",
        "primary-700": "#D92F18",
        "primary-800": "#A8210E",
        "primary-900": "#901D0C",
        "gray-50": "#F7FAFC",
        "gray-100": "#EDF2F7",
        "gray-200": "#E2E8F0",
        "gray-300": "#CBD5E0",
        "gray-400": "#A0AEC0",
        "gray-500": "#718096",
        "gray-600": "#4A5568",
        "gray-700": "#2D3748",
        "gray-800": "#1A202C",
        "gray-900": "#171923",
        "blue-50": "#EBF8FF",
        "blue-100": "#BEE3F8",
        "blue-200": "#90CDF4",
        "blue-300": "#63B3ED",
        "blue-400": "#4299E1",
        "blue-500": "#3182CE",
        "blue-600": "#2B6CB0",
        "blue-700": "#2C5282",
        "blue-800": "#2A4365",
        "blue-900": "#1A365D",
      },
      boxShadow: {
        md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
        lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
        "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
export default config